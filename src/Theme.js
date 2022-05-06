import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#607d8b",
      light: "#b0bec5",
      dark: "#455a64",
    },
    secondary: {
      main: "#fff59d",
      light: "#ffffcf",
      dark: "#cbc26d",
    },
  },
  typography: {
    fontFamily: "Exo",
    fontSize: 20,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center",
  },
  variant: "menu",
};

const optionsElement = [
  "air",
  "clay",
  "dark",
  "death",
  "earth",
  "fire",
  "holy",
  "ice",
  "light",
  "lightning",
  "magical",
  "metal",
  "oil",
  "physical",
  "poison",
  "rock",
  "stone",
  "thunder",
  "water",
  "wind",
];

const optionsWeakness = [
  "damage from swords",
  "dark",
  "daze",
  "dia",
  "drain",
  "earth",
  "fire",
  "fire elemental weapons",
  "fire spells",
  "gravity",
  "ground",
  "haste",
  "holy",
  "ice",
  "launch",
  "light",
  "lightning",
  "lightning element",
  "low HP",
  "piercing",
  "poison",
  "polearms",
  "shields element",
  "size",
  "slow movement",
  "spell",
  "stone",
  "reflect",
  "regen",
  "water",
  "wind",
  "wizzard cast",
];

const optionsStrength = [
  "acute senses",
  "attack blockers",
  "battle in a pack",
  "berserk",
  "blaster attacks",
  "blaze",
  "body slam",
  "constrict",
  "cura",
  "defense stat",
  "drink magic",
  "earhquake",
  "fast",
  "fast jump",
  "fire",
  "fire based attacks",
  "gaze attack",
  "group attack",
  "heaviness",
  "ice",
  "icestorm",
  "imune to poison",
  "immunity to confusion",
  "ink blindness",
  "magic defense",
  "magic resistance",
  "mighty guard",
  "mist attack",
  "multiple attack sequence",
  "normal attack",
  "lightning",
  "lunge",
  "ochu dance",
  "physical attack",
  "poison feathers",
  "poison gas attack",
  "pyromania",
  "quicksand",
  "ram",
  "reflection",
  "sandstorm",
  "scream",
  "self-healing abilities",
  "silence",
  "size",
  "sleep",
  "slow",
  "spellcast",
  "speed",
  "spell",
  "stop",
  "strike",
  "tail strike",
  "tri-attack",
  "vespersong",
  "warsong",
  "war cry",
  "wind absorption",
  "wings",
  "wing flap",
];

const optionsResistance = [
  "alterna",
  "berserk",
  "blind",
  "blindness",
  "consfuse",
  "curse",
  "damage spikes",
  "darkness",
  "daze",
  "death",
  "disable",
  "disese",
  "doom",
  "earth",
  "fire",
  "float",
  "fog",
  "ice",
  "imperil",
  "light",
  "lightning",
  "lure",
  "magic",
  "mind",
  "none",
  "pain",
  "paralysis",
  "petrify",
  "poison",
  "quake",
  "reverse",
  "sap",
  "silence",
  "sleep",
  "slow",
  "stone",
  "stop",
  "thunder",
  "time",
  "unknown",
  "water",
  "wind",
];

const optionsWeapon = [
  "aereo",
  "aero",
  "arms shooting",
  "bile",
  "bio",
  "bite",
  "blase",
  "blaster",
  "blast wave",
  "blaze",
  "blind",
  "breath",
  "burning strike",
  "claws",
  "confuse",
  "dagger",
  "dark",
  "death",
  "demi",
  "divine",
  "dragon claws",
  "earthquake",
  "earth hammer",
  "earth spellstone",
  "esuna",
  "fangs",
  "fatal walking over",
  "firearms",
  "fire-brathing",
  "flash-freeze",
  "frostwave",
  "gaia drum",
  "gnaw",
  "hellfire",
  "hold",
  "holy",
  "icestorm",
  "inferno",
  "ink",
  "kick",
  "leech",
  "level 5 death",
  "light",
  "lunge",
  "maelstrom",
  "magic",
  "magic spell",
  "magical damage",
  "mandible",
  "meteor",
  "meteor strike",
  "paralysis attack",
  "paralyzing gaze",
  "physical attack",
  "physical damage",
  "plasma storm",
  "platinum sword",
  "poison",
  "poison gas",
  "punch",
  "slap",
  "sleep",
  "spear",
  "spell cycle with fira",
  "spell flare",
  "spikes",
  "state of temporary invicibility",
  "sword",
  "tentacles",
  "thunder",
  "thunderbolt",
  "trident",
  "wings",
];

export {
  Theme,
  MenuProps,
  optionsElement,
  optionsStrength,
  optionsWeakness,
  optionsResistance,
  optionsWeapon,
};
