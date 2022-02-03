# aam
・基本パスミス ・app.jsの内容が反映されなかったが、app.cssは反映されている。（背景が緑になったため） ⇒buildの中のinde.htmlを変更したらできた。

のidをapp.jsにあるpostに変更した。デプロイ後、再びbuildを確認すると、postは見当たらず。ただ、web上の要素（ctr＋シフト＋i）でやつで見たら、id=rootの中にid=postが入っていた。 ⇒（追記）publicの方のindex.htmlの方をいじってもできた。
