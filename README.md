# Lucky discord

![Made for ZSK](https://www.zsk.poznan.pl/wp-content/uploads/2019/05/logo_napis.png "ZSK Logo")

Chcesz szybko dowiedzieć się jaki jest dzisiaj szczęśliwy numerek? Wyślij na discordzie klasowym wiadomość *!lucky* i tyle.

## Setup

```bash
git clone https://github.com/latachz/send-lucky-discord.git
# Clone this repo

npm install
# Run dependencies

```

Create `./config.json` and paste there your configuration:

```json
{
  "1": "John Snow",
  "2": "Perry the Platypus",
  "3": "Elon MusK"
}
```

Create `./.env` and paste there your configuration:

```env
TOKEN=your_token
```

```bash
npm start
# Run app
```


Deploy it on Heroku or Netlify.


