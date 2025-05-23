const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.bound,
		C3.Behaviors.scrollto,
		C3.Plugins.Mouse,
		C3.Behaviors.destroy,
		C3.Behaviors.Bullet,
		C3.Behaviors.Fade,
		C3.Plugins.Text,
		C3.Plugins.Keyboard,
		C3.Plugins.TextBox,
		C3.Plugins.Button,
		C3.Plugins.AJAX,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.TextBox.Acts.SetVisible,
		C3.Plugins.Button.Acts.SetVisible,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Bullet.Exps.Speed,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Acts.RotateTowardPosition,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Plugins.AJAX.Acts.Request,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.System.Exps.replace,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.AJAX.Acts.Post,
		C3.Plugins.TextBox.Exps.Text
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{"8Direction": 0},
	{BoundToLayout: 0},
	{ScrollTo: 0},
	{Player: 0},
	{Mouse: 0},
	{DestroyOutsideLayout: 0},
	{Bullet: 0},
	{Spell: 0},
	{health: 0},
	{Movement: 0},
	{Zombie: 0},
	{Fade: 0},
	{SpellFlash: 0},
	{Status: 0},
	{GameOverText: 0},
	{Keyboard: 0},
	{RankingDeJogadores: 0},
	{NomeJogador: 0},
	{Enviar: 0},
	{AJAX: 0},
	{ZombieSpeed: 0},
	{Score: 0},
	{Pontos: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Player: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Spell: class extends self.ISpriteInstance {},
	Zombie: class extends self.ISpriteInstance {},
	SpellFlash: class extends self.ISpriteInstance {},
	Status: class extends self.ITextInstance {},
	GameOverText: class extends self.ITextInstance {},
	Keyboard: class extends self.IInstance {},
	RankingDeJogadores: class extends self.ITextInstance {},
	NomeJogador: class extends self.ITextInputInstance {},
	Enviar: class extends self.IButtonInstance {},
	AJAX: class extends self.IInstance {}
}