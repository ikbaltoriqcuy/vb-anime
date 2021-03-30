Imports System.Drawing.Bitmap
Imports System.IO
Imports Microsoft.Win32.Registry


Public Class AnimeStyle

    Dim kursor As Point
    Dim pindah As Boolean = False
    Dim f As Point
    Dim C As String
    Dim time As String
    Dim s, Type As Boolean
    Public k As Point
    Dim n(4) As Integer
    Dim locals(4) As Point
    Dim l As Random = New Random
    Dim o(4) As Integer
    Dim image_1(4) As Bitmap
    Dim Directory As String
    Dim AlignLeft As Long
    Dim Registry As Microsoft.Win32.Registry




    Private Sub AnimeStyle_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        k = New Point(DesktopLocation.X, DesktopLocation.Y)
        Me.DesktopLocation = k
        Timer1.Enabled = True
        AlignLeft = DesktopLocation.X + 970
        For a As Integer = 1 To 3
            image_1(a) = New Bitmap (Application.StartupPath & "/Gambar/" & Trim(Str(a)) & ".jpg")
        Next
        PictureBox4.Image = image_1(1)
        PictureBox5.Image = image_1(2)
        PictureBox6.Image = image_1(3)



    End Sub

    Private Sub CloseToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles CloseToolStripMenuItem.Click
        End
    End Sub

    Private Sub SettingToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs)
        Me.DesktopLocation = k

    End Sub

    Private Sub ToolStripMenuItem2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ToolStripMenuItem2.Click
        Me.Opacity = 1
        If ToolStripMenuItem3.Checked = True Or ToolStripMenuItem4.Checked = True Or ToolStripMenuItem5.Checked = True Then
            ToolStripMenuItem5.Checked = True
            ToolStripMenuItem3.Checked = False
            ToolStripMenuItem4.Checked = False
            ToolStripMenuItem2.Checked = False
        End If
    End Sub

    Private Sub ToolStripMenuItem3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ToolStripMenuItem3.Click
        Me.Opacity = 0.9

        If ToolStripMenuItem2.Checked = True Or ToolStripMenuItem4.Checked = True Or ToolStripMenuItem5.Checked = True Then
            ToolStripMenuItem5.Checked = False
            ToolStripMenuItem4.Checked = False
            ToolStripMenuItem2.Checked = False
            ToolStripMenuItem3.Checked = True
        End If
    End Sub

    Private Sub ToolStripMenuItem4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ToolStripMenuItem4.Click
        Me.Opacity = 0.85

        If ToolStripMenuItem3.Checked = True Or ToolStripMenuItem2.Checked = True Or ToolStripMenuItem5.Checked = True Then
            ToolStripMenuItem3.Checked = False
            ToolStripMenuItem5.Checked = False
            ToolStripMenuItem2.Checked = False
            ToolStripMenuItem4.Checked = True
        End If
    End Sub

    Private Sub ToolStripMenuItem5_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ToolStripMenuItem5.Click
        Me.Opacity = 0.8

        If ToolStripMenuItem3.Checked = True Or ToolStripMenuItem4.Checked = True Or ToolStripMenuItem2.Checked = True Then
            ToolStripMenuItem3.Checked = False
            ToolStripMenuItem4.Checked = False
            ToolStripMenuItem2.Checked = False
            ToolStripMenuItem5.Checked = True
        End If
    End Sub

    Private Sub Timer1_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Timer1.Tick
        Static n As Long
        Dim a, b, c As Long
        If Type Then
            a = l.Next(1, 19)
            b = l.Next(1, 19)
            c = l.Next(1, 19)
            If a = b Or a = c Then
                a = l.Next(1, 19)
            End If
            If b = a Or b = c Then
                b = l.Next(1, 19)
            End If
            If c = a Or c = b Then
                c = l.Next(1, 19)
            End If
        Else
            n += 1
            b = 1 + n
            If b > 19 Then
                b = 2
            End If
            c = 2 + n
            If c > 19 Then
                c = 3
            End If
            If n = 19 Then
                n = 1
            End If
        End If

        If Type Then
            PictureBox4.ImageLocation = Application.StartupPath & "/Gambar/" & Trim(Str(a)) & ".jpg"
        Else
            PictureBox4.ImageLocation = Application.StartupPath & "/Gambar/" & Trim(Str(n)) & ".jpg"
        End If
        PictureBox5.ImageLocation = Application.StartupPath & "/Gambar/" & Trim(Str(b)) & ".jpg"
        PictureBox6.ImageLocation = Application.StartupPath & "/Gambar/" & Trim(Str(c)) & ".jpg"

        '    n += 1
        '    If n = 1 Then
        '        n = 0
        '        For Each Directory In IO.Directory.GetFiles(Application.ExecutablePath + "/gambar", "*", IO.SearchOption.AllDirectories)

        '            o(1) = l.Next(1, 5)
        '            Randomize()
        '            image_1(1) = New Bitmap(Application.ExecutablePath + "/gambar" + Directory)
        '            image_1(1).SetResolution(50, 100)
        '            PictureBox4.Image = image_1(1)
        '            image_1(1) = Nothing

        '            o(2) = l.Next(1, 5)
        '            image_1(2) = New Bitmap(Application.StartupPath & "/Gambar/" & Trim(Str(o(2))) & ".jpg")
        '            image_1.GetLowerBound(0)
        '            image_1(2).SetResolution(50, 100)
        '            PictureBox5.Image = image_1(2)
        '            image_1(2) = Nothing

        '            o(3) = l.Next(1, 5)
        '            image_1(3) = New Bitmap(Application.StartupPath & "/Gambar/" & Trim(Str(o(3))) & ".jpg")
        '            image_1.GetLowerBound(0)
        '            image_1(3).SetResolution(50, 100)
        '            PictureBox6.Image = image_1(3)
        '            image_1(3) = Nothing
        '        Next


        '    Else
        '        PictureBox4.Image = Nothing
        '    End If

    End Sub

    Private Sub RunToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles RunToolStripMenuItem.Click
        Microsoft.Win32.Registry.LocalMachine.OpenSubKey("SOFTWARE\Microsoft\Windows\CurrentVersion\Run", True).SetValue(Application.ProductName, Application.ExecutablePath)


        '       My.Computer.Registry.LocalMachine.OpenSubKey("SOFTWARE\Microsoft\Windows\CurrentVersion\Run", True).SetValue(Application.ProductName, Application.ExecutablePath)
        '      Console.Write(Application.ExecutablePath)
    End Sub

    Private Sub SecomdToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles SecomdToolStripMenuItem.Click
        Timer1.Interval = 500
        If SecondToolStripMenuItem.Checked = True Or SecondToolStripMenuItem1.Checked = True Or SecondToolStripMenuItem2.Checked = True Then
            SecondToolStripMenuItem.Checked = False
            SecondToolStripMenuItem1.Checked = False
            SecondToolStripMenuItem2.Checked = False
            SecomdToolStripMenuItem.Checked = True
        End If

    End Sub

    Private Sub SecondToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles SecondToolStripMenuItem.Click
        Timer1.Interval = 1000
        If SecomdToolStripMenuItem.Checked = True Or SecondToolStripMenuItem1.Checked = True Or SecondToolStripMenuItem2.Checked = True Then

            SecondToolStripMenuItem.Checked = False

        End If
    End Sub

    Private Sub SecondToolStripMenuItem1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles SecondToolStripMenuItem1.Click
        Timer1.Interval = 5000
        If SecomdToolStripMenuItem.Checked = True Or SecondToolStripMenuItem.Checked = True Or SecondToolStripMenuItem2.Checked = True Then
            SecondToolStripMenuItem1.Checked = False

        End If

    End Sub

    Private Sub SecondToolStripMenuItem2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles SecondToolStripMenuItem2.Click
        Timer1.Interval = 10000
        If SecomdToolStripMenuItem.Checked = True Or SecondToolStripMenuItem1.Checked = True Or SecondToolStripMenuItem.Checked = True Then
            SecondToolStripMenuItem2.Checked = False

        End If

    End Sub

    Private Sub RightToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles RightToolStripMenuItem.Click
        k = New Point(0, DesktopLocation.Y)
        Me.DesktopLocation = k
            RightToolStripMenuItem.Checked = True
        LeftToolStripMenuItem.Checked = False
    End Sub

    Private Sub LeftToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles LeftToolStripMenuItem.Click
        k = New Point(AlignLeft, DesktopLocation.Y)
        Me.DesktopLocation = k
        RightToolStripMenuItem.Checked = False
        LeftToolStripMenuItem.Checked = True

    End Sub


    Private Sub RandomToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Randome.Click
        Type = True
        Randome.CheckState = CheckState.Checked
        Ascending.CheckState = CheckState.Unchecked
    End Sub

    Private Sub Ascending_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Ascending.Click
        Type = False
        Randome.CheckState = CheckState.Unchecked
        Ascending.CheckState = CheckState.Checked

    End Sub

    Private Sub TrueToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles TrueToolStripMenuItem.Click
        Me.TopMost = True
        FalseToolStripMenuItem.Checked = False
        TrueToolStripMenuItem.Checked = True

    End Sub

    Private Sub FalseToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles FalseToolStripMenuItem.Click
        Me.TopMost = False
        TrueToolStripMenuItem.Checked = False
        FalseToolStripMenuItem.Checked = True

    End Sub

    Private Sub PictureBox4_MouseDown(ByVal sender As Object, ByVal e As System.Windows.Forms.MouseEventArgs) Handles PictureBox4.MouseDown
        If e.Button = Windows.Forms.MouseButtons.Right Then
            ContextMenuStrip1.Show(MousePosition.X, MousePosition.Y)
        End If
    End Sub

    Private Sub PictureBox5_MouseDown(ByVal sender As Object, ByVal e As System.Windows.Forms.MouseEventArgs) Handles PictureBox5.MouseDown
        If e.Button = Windows.Forms.MouseButtons.Right Then
            ContextMenuStrip1.Show(MousePosition.X, MousePosition.Y)
        End If
    End Sub
    Private Sub PictureBox6_MouseDown(ByVal sender As Object, ByVal e As System.Windows.Forms.MouseEventArgs) Handles PictureBox6.MouseDown
        If e.Button = Windows.Forms.MouseButtons.Right Then
            ContextMenuStrip1.Show(MousePosition.X, MousePosition.Y)
        End If

    End Sub

    Private Sub StartToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles StartToolStripMenuItem.Click

    End Sub

    Private Sub StartToolStripMenuItem1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles StartToolStripMenuItem1.Click
        If StartToolStripMenuItem1.Text = "Stop" Then
            Timer1.Enabled = False
            StartToolStripMenuItem1.Text = "Start"
        Else
            Timer1.Enabled = True
            StartToolStripMenuItem1.Text = "Stop"
        End If

    End Sub

    Private Sub ContextMenuStrip1_Opening(ByVal sender As System.Object, ByVal e As System.ComponentModel.CancelEventArgs) Handles ContextMenuStrip1.Opening

    End Sub

    Private Sub ToolStripMenuItem1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs)

    End Sub

    Private Sub PictureBox4_Click(sender As Object, e As EventArgs) Handles PictureBox4.Click

    End Sub

    Private Sub PictureBox5_Click(sender As Object, e As EventArgs) Handles PictureBox5.Click

    End Sub

    Private Sub Label1_Click(sender As Object, e As EventArgs)

    End Sub

    Private Sub PictureBox6_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles PictureBox6.Click

    End Sub
End Class
