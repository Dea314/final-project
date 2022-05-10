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
