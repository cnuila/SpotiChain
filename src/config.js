export const ALBUMES_ADDRESS = "0x6534e19D212c366C9D8E26CDa632013cbac821A6"

export const ALBUMES_ABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "canciones",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "nombreCancion",
        "type": "string"
      },
      {
        "name": "genero",
        "type": "string"
      },
      {
        "name": "duracion",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x0e362e5f"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "albumesCont",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x53ac2993"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "cancionesCont",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xa97c4429"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "albumes",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "nombreAlbum",
        "type": "string"
      },
      {
        "name": "artista",
        "type": "string"
      },
      {
        "name": "cancionInicial",
        "type": "uint256"
      },
      {
        "name": "totalCanciones",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xbc7a2230"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_nombreAlbum",
        "type": "string"
      },
      {
        "name": "_artista",
        "type": "string"
      }
    ],
    "name": "crearAlbum",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x93d3c462"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_nombreCancion",
        "type": "string"
      },
      {
        "name": "_genero",
        "type": "string"
      },
      {
        "name": "_duracion",
        "type": "string"
      }
    ],
    "name": "agregarCancion",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x964220bb"
  }
]