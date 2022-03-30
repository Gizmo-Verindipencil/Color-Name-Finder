# ルートディレクトリを取得
Set-Location $PSScriptRoot\..
$root = Get-Location

# ディレクトリに配置されたファイル名を取得する処理
function Get-FileName {
    param(
        $DirectoryName
    )

    # 対象ディレクトリの存在有無を確認
    $directoryPath = Join-Path -Path $root -ChildPath $DirectoryName
    if ((Test-Path $directoryPath) -eq $false) {
        Write-Host "Error: there is no $($directoryPath) directory."
        exit
    }

    # ディレクトリに配置されたファイルを取得
    $fileNames = Get-ChildItem -Path $directoryPath -Filter "*.txt" | Select-Object -Property Name, @{
        Label="FullPath"
        Expression={Join-Path -Path $directoryPath -ChildPath $_}
    }
    if ($fileNames.Count -eq 0) {
        Write-Host "Error: there is no file in $($DirectoryName) directory."
        exit
    }

    # ファイル名を返す
    return $fileNames
}

# データソースファイルを取得
$sources = Get-FileName -DirectoryName "source"

# ソース構造ファイルを取得
$structures = Get-FileName -DirectoryName "structure"

# データに対応する構造の有無を確認
foreach($source in $sources) {
    $matchedStructures = $structures | Where-Object { $_.Name -eq $source.Name}
    if ($matchedStructures.Count -eq 0) {
        Write-Host "Error: there is no structure for [$($source.Name)]."
        exit
    }
}

# 不要な構造があれば警告
foreach($structure in $structures) {
    $matchedSources = $sources | Where-Object { $_.Name -eq $structure.Name }
    if ($matchedSources.Count -eq 0) {
        Write-Host "Warning: there is no source for [$($structure.Name)]."
    }
}

# ファイル拡張子の置換処理
function Replace-FileExtension {
    param(
        $FileName,
        $Extension
    )

    $indexOfLastDot = $FileName.LastIndexOf(".")
    if ($indexOfLastDot -eq -1) {
        return $FileName + ".json"
    }
    else {
        $originalExtension = $FileName.Substring($indexOfLastDot)
        $fileNameWithoutExtension = $FileName.Substring(0, $FileName.Length - $originalExtension.Length)        
        return $fileNameWithoutExtension + $Extension
    }
}

# ファイル毎にjsonとして出力
$outputDirectoryPath = Join-Path -Path $root -ChildPath "json"
foreach($source in $sources) {
    # データソースの構造を取得
    $matchedStructures = $structures | Where-Object { $_.Name -eq $source.Name}
    $itemNames = Get-Content $matchedStructures[0].FullPath
    
    # データソースを取得
    $data = Get-Content $source.FullPath -Encoding UTF8
    
    # データソースをオブジェクトに変換
    $list = [System.Collections.ArrayList]::new()
    for($i = 0; $i -lt $data.Length; $i+=3) {
        # 名称を設定
        if     ($itemNames[0] -eq "name"    ) { $name = $data[$i]         } 
        elseif ($itemNames[1] -eq "name"    ) { $name = $data[$i + 1]     } 
        elseif ($itemNames[2] -eq "name"    ) { $name = $data[$i + 2]     }
        else {
            Write-Host "Error: name is missing."
            exit
        }

        # フリガナを設定
        if     ($itemNames[0] -eq "phonetic") { $phonetic = $data[$i]     } 
        elseif ($itemNames[1] -eq "phonetic") { $phonetic = $data[$i + 1] } 
        elseif ($itemNames[2] -eq "phonetic") { $phonetic = $data[$i + 2] }
        else {
            Write-Host "Error: phoetic is missing."
            exit
        }

        # 色コードを設定
        if     ($itemNames[0] -eq "hex"     ) { $hex     = $data[$i]      } 
        elseif ($itemNames[1] -eq "hex"     ) { $hex     = $data[$i + 1]  } 
        elseif ($itemNames[2] -eq "hex"     ) { $hex     = $data[$i + 2]  }
        else {
            Write-Host "Error: hex is missing."
            exit
        }

        # オブジェクトを追加
        $object = @{ name=$name.ToString(); phonetic=$phonetic.ToString(); hex=$hex.ToLower(); }
        $json = ConvertTo-Json -InputObject $object
        $list.Add($json)
    }

    # 結果を出力
    $newFileName = Replace-FileExtension -FileName $source.Name -Extension ".json"
    $outputFilePath = Join-Path -Path $outputDirectoryPath -ChildPath $newFileName
    $outputContent = "[`n$($list -join ",`n")`n]"
    Write-Output $outputContent | Out-File $outputFilePath -Encoding utf8
}
