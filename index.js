// import { ethers } from "ethers";
const ethers = require("ethers");
const dotenv = require("dotenv");

dotenv.config();
const main = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://sepolia.infura.io/v3/49a6aae240f24cfd8407be92847a3fa1"
  );

  // Provider
  //   console.log(await provider.getBlockNumber());

  //   const balance = await provider.getBalance(
  //     "0xE5c8F6E4fcE0d02567Cc68B6366599140DAbC612"
  //   );

  //   console.log(ethers.formatEther(balance));

  //   console.log(await provider.getBlock());

  // Signer

  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  //   let tx = {
  //     to: "0x894069B18a57303718e9b27cF2Ce0fD1B2314b43",
  //     value: ethers.utils.parseEther("0.01"),
  //   };

  //   // 2.22
  //   let Tx = await signer.sendTransaction();
  //   await Tx.wait();

  //   console.log(Tx);

  // Contract

  const contract_address = "0x7e8A15819ecE47DE19553880efACDA054941a23e";
  const ABI = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "Error__CompleteAllTask",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "adr",
          type: "address",
        },
      ],
      name: "Error__NotAnOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "Error__TaskNotExist",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Error__TransactionFailed",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "adr",
          type: "address",
        },
      ],
      name: "taskCompleted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "_work",
          type: "string",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "status",
          type: "bool",
        },
      ],
      name: "taskCreate",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "_work",
          type: "string",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "status",
          type: "bool",
        },
      ],
      name: "taskToggle",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "withdrawRevenue",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "adr",
          type: "address",
        },
      ],
      name: "changeOwner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "completeTask",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_work",
          type: "string",
        },
      ],
      name: "createTask",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "getRevenue",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getReward",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getTask",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "content",
              type: "string",
            },
            {
              internalType: "bool",
              name: "status",
              type: "bool",
            },
          ],
          internalType: "struct Todo.Task[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "toggleTask",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "withDraw",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ];
  const contract = new ethers.Contract(contract_address, ABI, signer);

  //   const createTask_tx = await contract.createTask("learn React", {
  //     value: ethers.utils.parseEther("0.01"),
  //   });

  //   await createTask_tx.wait();
  //   console.log(createTask_tx);

  //   const toggleTask_tx = await contract.toggleTask(0);
  //   await toggleTask_tx.wait();

  //   console.log(toggleTask_tx);

  // const completeTask_tx = await contract.completeTask();
  // await completeTask_tx.wait();

  // console.log(completeTask_tx);

  console.log(await contract.getTask());
  console.log(await contract.getReward());
};

main();
