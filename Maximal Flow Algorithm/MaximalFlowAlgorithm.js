const FlowDiagram = {
  node: {
    1: {
      Connections: {
        2: { C12: 6, C21: 0 },
        3: { C13: 12, C31: 0 },
      },
    },
    2: {
      Connections: {
        4: { C24: 3, C42: 0 },
        5: { C52: 2, C52: 0 },
      },
    },
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
  },
};
console.log(FlowDiagram.node[1].Connections[2].C12);
