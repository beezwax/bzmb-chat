# bzmb-chat

A [bzBond-server](https://github.com/beezwax/bzBond/tree/main/packages/bzBond-server#bzbond-server) microbond to integrate with the ChatGTP API.

## Installation

On a server with bzBond-server installed run the following command:

`/var/www/bzbond-server/bin/install-plugin.sh bzmb-chat beezwax/bzmb-chat`

See the [bzBond-server documentation](https://github.com/beezwax/bzBond/tree/main/packages/bzBond-server#installing-plugins) for more details on installation.

## Usage

In a server-side FileMaker script run `bzBondRelay` script with parameters in the following format:

```
{
  "mode": "PERFORM_JAVASCRIPT",
  "route": "bzmb-chat",
  "customMethod": "POST",
  "customBody": {
     // ChatGTP API key. If this is empty an attempt will be made
     // to find the key in bzBond-server folder in a file named
     // chatgpt_key
    "key": "string",

    // Required. The prompt text to generate the chat completion
    "prompt": "string",

    // the maximum number of tokens in the response
    "length": number,

    // the temperature of the response
    // numbers above 1 are more random
    // numbers below 1 are more terministic
    // default:
    "temperature": 1,

    // the ChatGPT model to use
    // default:
    "model": "gpt-3.5-turbo"
  }
}

```

The text response from ChatGPT can be accessed via `Get ( ScriptResult )`:
`JSONGetElement ( Get ( ScriptResult ); "response.result" )`

