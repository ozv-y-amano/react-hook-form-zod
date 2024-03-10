import { useState } from "react";
import "./App.css";

function App() {
	const [name, setName] = useState("");
	// メールアドレスの処理
	// パスワードの処理

	const handleSubmit = (e: any) => {
		e.preventDefault();

		console.log(name);
	};
	// メールアドレスの処理
	// パスワードの処理
	return (
		<div className="form-container">
			<h1>React-Hook-Form</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="名前">名前</label>
				<input
					id="name"
					type="text"
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor="メールアドレス">メールアドレス</label>
				<input id="email" type="email" />
				<label htmlFor="パスワード">パスワード</label>
				<input id="password" type="password" />

				<button type="submit">送信</button>
			</form>
		</div>
	);
}

export default App;
