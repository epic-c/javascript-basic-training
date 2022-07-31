Sub 測試()

filePath = "C:\Users\eddy8\Downloads\test.xlsx"
Dim sourceWB As Workbook
Set sourceWB = Workbooks.Open(filePath)
Dim sourcesheets As Sheets
Set sourcesheet = sourceWB.Sheets

Sub 巨集2(ByVal a As Integer)
' 巨集2 巨集
    Selection.TextToColumns Destination:=Range("A" & a), DataType:=xlFixedWidth, _
        FieldInfo:=Array(Array(0, 1), Array(11, 1), Array(29, 1), Array(56, 1), Array(66, 1), _
        Array(74, 1), Array(88, 1)), TrailingMinusNumbers:=True
End Sub

lastRow = ActiveSheet.UsedRange.Rows.Count

Range("P1").Select
ActiveCell.FormulaR1C1 = "客戶ID"
Range("Q1").Select
ActiveCell.FormulaR1C1 = "戶名"
Range("R1").Select
ActiveCell.FormulaR1C1 = "表單日期"

For i = 1 To lastRow
    If Range("A" & i) = "=====================" Then
        If Range("A" & (i + 1)) = "今日無資料" Then
            Range("K" & (i + 1)).Value = "今日無資料"
            巨集2(i)
            i = i + 3
        Else
            For j = (i + 1) To lastRow
                If Range("A" & j) = "=====================" Then
                    'Dim count As Integer

                    'count = j - (i + 1)

                    'Dim count2 As Integer

                    'count2 = count / 3

                    count = ((j - i) / 3)
                    Dim count2 As Integer

                    count2 = count

                    For k  = 0 To count2
                    
                        'va As String = Range("A" & (i + (3 * k) + 1)).Value
                        
                        'Range("P" & 名單).Value = Range("A" & i + 1).Value
                        
                        Range("P" & 名單).Value = Range("A" & (i + (3k) + 1)).Value
                        
                       
                        
                        
                        名單 = 名單 + 1
                    Next k


                    Range("L" & j).Value = j - (i + 1)
                    i = j + 1
                End If
            Next j
        End If
    End If
Next i

End Sub