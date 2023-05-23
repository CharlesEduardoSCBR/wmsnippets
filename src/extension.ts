import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "wmsnippets" is now active!');
	
	let disposable = vscode.commands.registerCommand('wmsnippets.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from wmsnippets!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
