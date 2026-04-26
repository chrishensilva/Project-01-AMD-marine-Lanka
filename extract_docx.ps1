$xmlContent = [xml](Get-Content 'docx_extracted\word\document.xml' -Raw)
$nsMgr = New-Object System.Xml.XmlNamespaceManager($xmlContent.NameTable)
$nsMgr.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
$nodes = $xmlContent.SelectNodes('//w:t', $nsMgr)
foreach ($node in $nodes) {
    Write-Host $node.InnerText
}
