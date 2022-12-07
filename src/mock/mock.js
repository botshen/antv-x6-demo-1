import { faker } from '@faker-js/faker'


faker.setLocale('zh_CN');

export const mockSession = () => {
  return [200, {
    jwt: faker.random.word()
  }]
}

// mockXXX
export const mocktreeData = () => {
  return [200, {
    data: {
      // 节点
      nodes: [
        {
          id: "node1",
          x: 50,
          y: 50,
          width: 200,
          height: 40,
          label: "node1",
        },
        {
          id: "node2",
          x: 160,
          y: 180,
          width: 80,
          height: 40,
          label: "node2",
        },
        {
          id: "node99",
          x: 160,
          y: 280,
          width: 80,
          height: 40,
          label: "node2.1",
        },
        {
          id: "node3",
          x: 300,
          y: 300,
          width: 80,
          height: 40,
          label: "Foo",
        },
        {
          id: "node4",
          x: 400,
          y: 100,
          width: 80,
          height: 40,
          label: "Bar",
        },
      ],
      // 边
      edges: [
        {
          source: "node1",
          target: "node2",
        },
        {
          source: "node1",
          target: "node99",
        },
        {
          source: "node2",
          target: "node3",
        },
        {
          source: "node3",
          target: "node4",
        },
      ],
    },
  }]
}
