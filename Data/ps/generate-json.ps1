# ���[�g�f�B���N�g�����擾
Set-Location $PSScriptRoot\..
$root = Get-Location

# �f�B���N�g���ɔz�u���ꂽ�t�@�C�������擾���鏈��
function Get-FileName {
    param(
        $DirectoryName
    )

    # �Ώۃf�B���N�g���̑��ݗL�����m�F
    $directoryPath = Join-Path -Path $root -ChildPath $DirectoryName
    if ((Test-Path $directoryPath) -eq $false) {
        Write-Host "Error: there is no $($directoryPath) directory."
        exit
    }

    # �f�B���N�g���ɔz�u���ꂽ�t�@�C�����擾
    $fileNames = Get-ChildItem -Path $directoryPath -Filter "*.txt" | Select-Object -Property Name, @{
        Label="FullPath"
        Expression={Join-Path -Path $directoryPath -ChildPath $_}
    }
    if ($fileNames.Count -eq 0) {
        Write-Host "Error: there is no file in $($DirectoryName) directory."
        exit
    }

    # �t�@�C������Ԃ�
    return $fileNames
}

# �f�[�^�\�[�X�t�@�C�����擾
$sources = Get-FileName -DirectoryName "source"

# �\�[�X�\���t�@�C�����擾
$structures = Get-FileName -DirectoryName "structure"

# �f�[�^�ɑΉ�����\���̗L�����m�F
foreach($source in $sources) {
    $matchedStructures = $structures | Where-Object { $_.Name -eq $source.Name}
    if ($matchedStructures.Count -eq 0) {
        Write-Host "Error: there is no structure for [$($source.Name)]."
        exit
    }
}

# �s�v�ȍ\��������Όx��
foreach($structure in $structures) {
    $matchedSources = $sources | Where-Object { $_.Name -eq $structure.Name }
    if ($matchedSources.Count -eq 0) {
        Write-Host "Warning: there is no source for [$($structure.Name)]."
    }
}

# �t�@�C���g���q�̒u������
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

# �t�@�C������json�Ƃ��ďo��
$outputDirectoryPath = Join-Path -Path $root -ChildPath "json"
foreach($source in $sources) {
    # �f�[�^�\�[�X�̍\�����擾
    $matchedStructures = $structures | Where-Object { $_.Name -eq $source.Name}
    $itemNames = Get-Content $matchedStructures[0].FullPath
    
    # �f�[�^�\�[�X���擾
    $data = Get-Content $source.FullPath -Encoding UTF8
    
    # �f�[�^�\�[�X���I�u�W�F�N�g�ɕϊ�
    $list = [System.Collections.ArrayList]::new()
    for($i = 0; $i -lt $data.Length; $i+=3) {
        # ���̂�ݒ�
        if     ($itemNames[0] -eq "name"    ) { $name = $data[$i]         } 
        elseif ($itemNames[1] -eq "name"    ) { $name = $data[$i + 1]     } 
        elseif ($itemNames[2] -eq "name"    ) { $name = $data[$i + 2]     }
        else {
            Write-Host "Error: name is missing."
            exit
        }

        # �t���K�i��ݒ�
        if     ($itemNames[0] -eq "phonetic") { $phonetic = $data[$i]     } 
        elseif ($itemNames[1] -eq "phonetic") { $phonetic = $data[$i + 1] } 
        elseif ($itemNames[2] -eq "phonetic") { $phonetic = $data[$i + 2] }
        else {
            Write-Host "Error: phoetic is missing."
            exit
        }

        # �F�R�[�h��ݒ�
        if     ($itemNames[0] -eq "hex"     ) { $hex     = $data[$i]      } 
        elseif ($itemNames[1] -eq "hex"     ) { $hex     = $data[$i + 1]  } 
        elseif ($itemNames[2] -eq "hex"     ) { $hex     = $data[$i + 2]  }
        else {
            Write-Host "Error: hex is missing."
            exit
        }

        # �I�u�W�F�N�g��ǉ�
        $object = @{ name=$name.ToString(); phonetic=$phonetic.ToString(); hex=$hex.ToLower(); }
        $json = ConvertTo-Json -InputObject $object
        $list.Add($json)
    }

    # ���ʂ��o��
    $newFileName = Replace-FileExtension -FileName $source.Name -Extension ".json"
    $outputFilePath = Join-Path -Path $outputDirectoryPath -ChildPath $newFileName
    $outputContent = "[`n$($list -join ",`n")`n]"
    Write-Output $outputContent | Out-File $outputFilePath -Encoding utf8
}
