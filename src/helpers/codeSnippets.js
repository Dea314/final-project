export const baseURLSnippets = {
  javascript: `fetch('${process.env.REACT_APP_API_URL}')
    .then(response => response.json())
    .then(data => console.log(data.characters))`,
  php: `$client = new GuzzleHttp\\Client();
    $res = $client->get('${process.env.REACT_APP_API_URL}')
    $characters = var_export($res->json())->characters;`,
  curl: `curl -G ${process.env.REACT_APP_API_URL}`,
};

export const getSingleCharacterByName = {
  javascript: `fetch('${process.env.REACT_APP_API_URL}?name=chimera')
      .then(response => response.json())
      .then(data => console.log(data.characters[0]))`,
  php: `$client = new GuzzleHttp\\Client();
      $res = $client->get('${process.env.REACT_APP_API_URL}?name=chimera')
      $characters = var_export($res->json())->characters[0];`,
  curl: `curl -G ${process.env.REACT_APP_API_URL} -d "query=name=chimera"`,
};

export const getCharactersByElement = {
  javascript: `fetch('${process.env.REACT_APP_API_URL}?elements= fire,water,holy')
      .then(response => response.json())
      .then(data => console.log(data.characters))`, 
  php: `$client = new GuzzleHttp\\Client();
      $res = $client->get('${process.env.REACT_APP_API_URL}?elements= fire,water,holy')
      $characters = var_export($res->json())->characters;`, 
  curl: `curl -G ${process.env.REACT_APP_API_URL} -d "query=elements= fire,water,holy"`,
};

export const getCharactersByStrength = {
  javascript: `fetch('${process.env.REACT_APP_API_URL}?strength=attack blockers,size')
      .then(response => response.json())
      .then(data => console.log(data.characters))`, 
  php: `$client = new GuzzleHttp\\Client();
      $res = $client->get('${process.env.REACT_APP_API_URL}?strength=attack blockers,size')
      $characters = var_export($res->json())->characters;`, 
  curl: `curl -G ${process.env.REACT_APP_API_URL} -d "query=strength=attack blockers,size"`,
};

export const getCharactersByWeakness = {
  javascript: `fetch('${process.env.REACT_APP_API_URL}?weakness=slow movement,low hp')
      .then(response => response.json())
      .then(data => console.log(data.characters))`, 
  php: `$client = new GuzzleHttp\\Client();
      $res = $client->get('${process.env.REACT_APP_API_URL}?weakness=slow movement,low hp')
      $characters = var_export($res->json())->characters;`, 
  curl: `curl -G ${process.env.REACT_APP_API_URL} -d "query=weakness=slow movement,low hp"`,
};

export const getCharactersByResistance = {
  javascript: `fetch('${process.env.REACT_APP_API_URL}?resistance=poison,confuse,death')
      .then(response => response.json())
      .then(data => console.log(data.characters))`, 
  php: `$client = new GuzzleHttp\\Client();
      $res = $client->get('${process.env.REACT_APP_API_URL}?resistance=poison,confuse,death')
      $characters = var_export($res->json())->characters;`, 
  curl: `curl -G ${process.env.REACT_APP_API_URL} -d "query=resistance=poison,confuse,death"`,
};

export const getCharactersByWeapon = {
  javascript: `fetch('${process.env.REACT_APP_API_URL}?weapon=confuse,aereo,meteor')
      .then(response => response.json())
      .then(data => console.log(data.characters))`, 
  php: `$client = new GuzzleHttp\\Client();
      $res = $client->get('${process.env.REACT_APP_API_URL}?weapon=confuse,aereo,meteor')
      $characters = var_export($res->json())->characters;`, 
  curl: `curl -G ${process.env.REACT_APP_API_URL} -d "query=weapon=confuse,aereo,meteor"`,
};

export const getCharactersByLocation = {
  javascript: `fetch('${process.env.REACT_APP_API_URL}?location=Palamecia,Pandaemonium')
      .then(response => response.json())
      .then(data => console.log(data.characters))`, 
  php: `$client = new GuzzleHttp\\Client();
      $res = $client->get('${process.env.REACT_APP_API_URL}?location=Palamecia,Pandaemonium')
      $characters = var_export($res->json())->characters;`, 
  curl: `curl -G ${process.env.REACT_APP_API_URL} -d "query=location=Palamecia,Pandaemonium"`,
};