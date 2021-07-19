const textNodes = [
    {
      id: 1,
      text: "West of House. You are standing in an open field west of a white house, with a boarded front door. There is a small mailbox here.",
      options: [
        {
          text: "open mailbox",
          // setState: { blueGoo: true },
          nextText: 2,
        },
      ],
    },
    {
      id: 2,
      text: "Opening the small mailbox reveals a leaflet.",
      options: [
        {
          text: "read leaflet",
          // requiredState: (currentState) => currentState.blueGoo,
          // setState: { blueGoo: false, sword: true },
          nextText: 3,
        },
      ],
    },
    {
      id: 3,
      text: "(Taken) WELCOME TO ZORK! ZORK is a game of adventure, danger, and low cunning. In it you will explore some of the most amazing territory ever seen by mortals. No computer should be without one!",
      options: [
        {
          text: "drop leaflet",
          nextText: 4,
        },
      ],
    },
    {
      id: 4,
      text: "Dropped.",
      options: [
        {
          text: "go south",
          nextText: 5,
        },
        {
          text: "go east",
          nextText: 6,
        },
      ],
    },
    {
      id: 5,
      text: "South of House. You are facing the south side of a white house. There is no door here, and all the windows are boarded.",
      options: [
        {
          text: "go east",
          nextText: 6,
        },
      ],
    },
    {
      id: 6,
      text: "Behind House. You are behind the white house. A path leads into the forest to the east. In one corner of the house there is a small window which is slightly ajar.",
      options: [
        {
          text: "open window",
          nextText: 7,
        },
      ],
    },
    {
      id: 7,
      text: "With great effort, you open the window far enough to allow entry.",
      options: [
        {
          text: "Try to run",
          nextText: 8,
        },
        {
          text: "Attack it with your sword",
          requiredState: (currentState) => currentState.sword,
          nextText: 9,
        },
        {
          text: "Hide behind your shield",
          requiredState: (currentState) => currentState.shield,
          nextText: 11,
        },
        {
          text: "Throw the blue goo at it",
          requiredState: (currentState) => currentState.blueGoo,
          nextText: 11,
        },
      ],
    },
    {
      id: 8,
      text: "Your attempts to run are in vain and the monster easily catches.",
      options: [
        {
          text: "Restart",
          nextText: 1,
        },
      ],
    },
    {
      id: 9,
      text: "You foolishly thought this monster could be slain with a single sword.",
      options: [
        {
          text: "Restart",
          nextText: 1,
        },
      ],
    },
    {
      id: 11,
      text: "The monster laughed as you hid behind your shield and ate you.",
      options: [
        {
          text: "Restart",
          nextText: 1,
        },
      ],
    },
    {
      id: 12,
      text: "You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.",
      options: [
        {
          text: "Congratulations. Play Again.",
          nextText: 1,
        },
      ],
    },
  ];
  export default textNodes;
  