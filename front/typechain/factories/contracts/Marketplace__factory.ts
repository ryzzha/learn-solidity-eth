/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  Marketplace,
  MarketplaceInterface,
} from "../../contracts/Marketplace";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ContractBalanceWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "OrderDelivered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "quantity",
        type: "uint8",
      },
    ],
    name: "ProductAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountPaid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "ProductPurchased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "quantity",
        type: "uint8",
      },
    ],
    name: "addProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "quantity",
        type: "uint8",
      },
    ],
    name: "buyProduct",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
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
    name: "feePercent",
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
    name: "getAllProducts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "quantity",
            type: "uint8",
          },
        ],
        internalType: "struct Marketplace.Product[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractBalance",
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
    inputs: [
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "getOrdersByBuyer",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "productId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountPaid",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isDelivered",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isWithdrawn",
            type: "bool",
          },
        ],
        internalType: "struct Marketplace.Order[]",
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
        name: "productId",
        type: "uint256",
      },
    ],
    name: "getProductQuantity",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
    ],
    name: "markOrderAsDelivered",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "orderCount",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "orders",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountPaid",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isDelivered",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isWithdrawn",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "productCount",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "products",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "quantity",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newFeePercent",
        type: "uint256",
      },
    ],
    name: "setFeePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawContractBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405260008055600060015560006002556005600355348015602257600080fd5b5033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612f66806100736000396000f3fe6080604052600436106101025760003560e01c80637fd6f15c11610095578063b496815311610064578063b49681531461038b578063b5abe85a146103b4578063db34d123146103dd578063e0f6ef871461041a578063f4c22cbd146104455761015b565b80637fd6f15c146102c85780638b7afe2e146102f35780638da5cb5b1461031e578063a85c38ef146103495761015b565b806354da1ab3116100d157806354da1ab31461020a5780636f9fb98a146102335780637acc0b201461025e5780637ce3489b1461029f5761015b565b806302ee3a52146101605780632453ffa81461018b57806324600fc3146101b65780633a875a43146101cd5761015b565b3661015b5734600260008282546101199190611a6b565b925050819055507f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f885258743334604051610151929190611aef565b60405180910390a1005b600080fd5b34801561016c57600080fd5b50610175610461565b6040516101829190611d1a565b60405180910390f35b34801561019757600080fd5b506101a0610648565b6040516101ad9190611d3c565b60405180910390f35b3480156101c257600080fd5b506101cb61064e565b005b3480156101d957600080fd5b506101f460048036038101906101ef9190611d8d565b6108a2565b6040516102019190611eff565b60405180910390f35b34801561021657600080fd5b50610231600480360381019061022c9190611fde565b610b4b565b005b34801561023f57600080fd5b50610248610de6565b6040516102559190611d3c565b60405180910390f35b34801561026a57600080fd5b5061028560048036038101906102809190612052565b610dee565b6040516102969594939291906120d8565b60405180910390f35b3480156102ab57600080fd5b506102c660048036038101906102c19190612052565b610ed9565b005b3480156102d457600080fd5b506102dd610ffb565b6040516102ea9190611d3c565b60405180910390f35b3480156102ff57600080fd5b50610308611001565b6040516103159190611d3c565b60405180910390f35b34801561032a57600080fd5b50610333611007565b6040516103409190612132565b60405180910390f35b34801561035557600080fd5b50610370600480360381019061036b9190612052565b61102d565b6040516103829695949392919061215c565b60405180910390f35b34801561039757600080fd5b506103b260048036038101906103ad9190612052565b6110a3565b005b3480156103c057600080fd5b506103db60048036038101906103d69190612052565b61124f565b005b3480156103e957600080fd5b5061040460048036038101906103ff9190612052565b611507565b60405161041191906121bd565b60405180910390f35b34801561042657600080fd5b5061042f611580565b60405161043c9190611d3c565b60405180910390f35b61045f600480360381019061045a91906121d8565b611586565b005b60606000805467ffffffffffffffff8111156104805761047f612218565b5b6040519080825280602002602001820160405280156104b957816020015b6104a661199a565b81526020019060019003908161049e5790505b5090506000600190505b600054811161064057600560008281526020019081526020016000206040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201805461055a90612276565b80601f016020809104026020016040519081016040528092919081815260200182805461058690612276565b80156105d35780601f106105a8576101008083540402835291602001916105d3565b820191906000526020600020905b8154815290600101906020018083116105b657829003601f168201915b50505050508152602001600382015481526020016004820160009054906101000a900460ff1660ff1660ff16815250508260018361061191906122a7565b81518110610622576106216122db565b5b602002602001018190525080806106389061230a565b9150506104c3565b508091505090565b60015481565b600080600190505b60015481116107605760006006600083815260200190815260200160002090506000600560008360010154815260200190815260200160002090503373ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480156106fe57508160040160009054906101000a900460ff165b801561070e575060008260030154115b801561072957508160040160019054906101000a900460ff16155b1561074b5781600301548461073e9190611a6b565b9350600082600301819055505b505080806107589061230a565b915050610656565b50600081116107a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079b9061239e565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516107ca906123ef565b60006040518083038185875af1925050503d8060008114610807576040519150601f19603f3d011682016040523d82523d6000602084013e61080c565b606091505b5050905080610850576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084790612450565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167feaff4b37086828766ad3268786972c0cd24259d4c87a80f9d3963a3c3d999b0d836040516108969190611d3c565b60405180910390a25050565b6060600080600190505b6001548111610940578373ffffffffffffffffffffffffffffffffffffffff166006600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361092d5781806109299061230a565b9250505b80806109389061230a565b9150506108ac565b5060008167ffffffffffffffff81111561095d5761095c612218565b5b60405190808252806020026020018201604052801561099657816020015b6109836119e2565b81526020019060019003908161097b5790505b509050600080600190505b6001548111610b3f578573ffffffffffffffffffffffffffffffffffffffff166006600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610b2c57600660008281526020019081526020016000206040518060c001604052908160008201548152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff161515151581526020016004820160019054906101000a900460ff161515151581525050838381518110610aee57610aed6122db565b5b602002602001018190525080838381518110610b0d57610b0c6122db565b5b602002602001015160000181815250508180610b289061230a565b9250505b8080610b379061230a565b9150506109a1565b50819350505050919050565b600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1603610bba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb1906124bc565b60405180910390fd5b60008211610bfd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf490612528565b60405180910390fd5b60008160ff1611610c43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3a906125ba565b60405180910390fd5b600080815480929190610c559061230a565b91905055506040518060a0016040528060005481526020013373ffffffffffffffffffffffffffffffffffffffff16815260200185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505081526020018381526020018260ff1681525060056000805481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019081610d5a9190612786565b506060820151816003015560808201518160040160006101000a81548160ff021916908360ff1602179055509050503373ffffffffffffffffffffffffffffffffffffffff166000547fe5c8c3396255f58ca138ded47f27af81e3070b6b9387f4b56b6c85a22e0fd21586868686604051610dd89493929190612894565b60405180910390a350505050565b600047905090565b60056020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054610e3d90612276565b80601f0160208091040260200160405190810160405280929190818152602001828054610e6990612276565b8015610eb65780601f10610e8b57610100808354040283529160200191610eb6565b820191906000526020600020905b815481529060010190602001808311610e9957829003601f168201915b5050505050908060030154908060040160009054906101000a900460ff16905085565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6090612946565b60405180910390fd5b6001811015610fad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa4906129b2565b60405180910390fd5b6032811115610ff1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe890612a1e565b60405180910390fd5b8060038190555050565b60035481565b60025481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60066020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040160009054906101000a900460ff16908060040160019054906101000a900460ff16905086565b60006006600083815260200190815260200160002090506000816001015411611101576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110f890612a8a565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611193576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118a90612b1c565b60405180910390fd5b8060040160009054906101000a900460ff16156111e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111dc90612b88565b60405180910390fd5b60018160040160006101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff168160010154837fa233feffeec0a9ecaad43111c1da65485f4cdf1d4f893b1670057803bfeef18060405160405180910390a45050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146112df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d690612946565b60405180910390fd5b600254471015611324576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161131b90612bf4565b60405180910390fd5b60008111611367576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135e90612c60565b60405180910390fd5b6002548111156113ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a390612ccc565b60405180910390fd5b80600260008282546113be91906122a7565b925050819055506000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168260405161140d906123ef565b60006040518083038185875af1925050503d806000811461144a576040519150601f19603f3d011682016040523d82523d6000602084013e61144f565b606091505b5050905080611493576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148a90612450565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f9ca86e26e8d02952f920895df7583aa717e8ebc63cd0708c0879da89b9a07445836040516114fb9190611d3c565b60405180910390a25050565b6000806005600084815260200190815260200160002090506000816000015411611566576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155d90612d38565b60405180910390fd5b8060040160009054906101000a900460ff16915050919050565b60005481565b600060056000848152602001908152602001600020905060008160000154116115e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115db90612d38565b60405180910390fd5b8160ff168160040160009054906101000a900460ff1660ff16101561163e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161163590612da4565b60405180910390fd5b8160ff1681600301546116519190612dc4565b341015611693576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168a90612e52565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611726576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171d906124bc565b60405180910390fd5b60008260ff16826003015461173b9190612dc4565b90506000813461174b91906122a7565b9050600060646003548461175f9190612dc4565b6117699190612ea1565b90506000818461177991906122a7565b905060008311156117cc573373ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f193505050501580156117ca573d6000803e3d6000fd5b505b858560040160008282829054906101000a900460ff166117ec9190612ed2565b92506101000a81548160ff021916908360ff160217905550600160008154809291906118179061230a565b91905055506040518060c0016040528060015481526020018881526020013373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200160001515815260200160001515815250600660006001548152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555060a08201518160040160016101000a81548160ff02191690831515021790555090505081600260008282546119369190611a6b565b925050819055503373ffffffffffffffffffffffffffffffffffffffff16876001547f619f9920b110dd40beb399a4a33eb50fc3fe6a9c3baf31be5e5a568fdac37f778486604051611989929190612f07565b60405180910390a450505050505050565b6040518060a0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001600060ff1681525090565b6040518060c001604052806000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581526020016000151581525090565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611a7682611a32565b9150611a8183611a32565b9250828201905080821115611a9957611a98611a3c565b5b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611aca82611a9f565b9050919050565b611ada81611abf565b82525050565b611ae981611a32565b82525050565b6000604082019050611b046000830185611ad1565b611b116020830184611ae0565b9392505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611b4d81611a32565b82525050565b611b5c81611abf565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b9c578082015181840152602081019050611b81565b60008484015250505050565b6000601f19601f8301169050919050565b6000611bc482611b62565b611bce8185611b6d565b9350611bde818560208601611b7e565b611be781611ba8565b840191505092915050565b600060ff82169050919050565b611c0881611bf2565b82525050565b600060a083016000830151611c266000860182611b44565b506020830151611c396020860182611b53565b5060408301518482036040860152611c518282611bb9565b9150506060830151611c666060860182611b44565b506080830151611c796080860182611bff565b508091505092915050565b6000611c908383611c0e565b905092915050565b6000602082019050919050565b6000611cb082611b18565b611cba8185611b23565b935083602082028501611ccc85611b34565b8060005b85811015611d085784840389528151611ce98582611c84565b9450611cf483611c98565b925060208a01995050600181019050611cd0565b50829750879550505050505092915050565b60006020820190508181036000830152611d348184611ca5565b905092915050565b6000602082019050611d516000830184611ae0565b92915050565b600080fd5b600080fd5b611d6a81611abf565b8114611d7557600080fd5b50565b600081359050611d8781611d61565b92915050565b600060208284031215611da357611da2611d57565b5b6000611db184828501611d78565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b611dfb81611de6565b82525050565b60c082016000820151611e176000850182611b44565b506020820151611e2a6020850182611b44565b506040820151611e3d6040850182611b53565b506060820151611e506060850182611b44565b506080820151611e636080850182611df2565b5060a0820151611e7660a0850182611df2565b50505050565b6000611e888383611e01565b60c08301905092915050565b6000602082019050919050565b6000611eac82611dba565b611eb68185611dc5565b9350611ec183611dd6565b8060005b83811015611ef2578151611ed98882611e7c565b9750611ee483611e94565b925050600181019050611ec5565b5085935050505092915050565b60006020820190508181036000830152611f198184611ea1565b905092915050565b600080fd5b600080fd5b600080fd5b60008083601f840112611f4657611f45611f21565b5b8235905067ffffffffffffffff811115611f6357611f62611f26565b5b602083019150836001820283011115611f7f57611f7e611f2b565b5b9250929050565b611f8f81611a32565b8114611f9a57600080fd5b50565b600081359050611fac81611f86565b92915050565b611fbb81611bf2565b8114611fc657600080fd5b50565b600081359050611fd881611fb2565b92915050565b60008060008060608587031215611ff857611ff7611d57565b5b600085013567ffffffffffffffff81111561201657612015611d5c565b5b61202287828801611f30565b9450945050602061203587828801611f9d565b925050604061204687828801611fc9565b91505092959194509250565b60006020828403121561206857612067611d57565b5b600061207684828501611f9d565b91505092915050565b600082825260208201905092915050565b600061209b82611b62565b6120a5818561207f565b93506120b5818560208601611b7e565b6120be81611ba8565b840191505092915050565b6120d281611bf2565b82525050565b600060a0820190506120ed6000830188611ae0565b6120fa6020830187611ad1565b818103604083015261210c8186612090565b905061211b6060830185611ae0565b61212860808301846120c9565b9695505050505050565b60006020820190506121476000830184611ad1565b92915050565b61215681611de6565b82525050565b600060c0820190506121716000830189611ae0565b61217e6020830188611ae0565b61218b6040830187611ad1565b6121986060830186611ae0565b6121a5608083018561214d565b6121b260a083018461214d565b979650505050505050565b60006020820190506121d260008301846120c9565b92915050565b600080604083850312156121ef576121ee611d57565b5b60006121fd85828601611f9d565b925050602061220e85828601611fc9565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061228e57607f821691505b6020821081036122a1576122a0612247565b5b50919050565b60006122b282611a32565b91506122bd83611a32565b92508282039050818111156122d5576122d4611a3c565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061231582611a32565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361234757612346611a3c565b5b600182019050919050565b7f4e6f2066756e647320746f207769746864726177000000000000000000000000600082015250565b600061238860148361207f565b915061239382612352565b602082019050919050565b600060208201905081810360008301526123b78161237b565b9050919050565b600081905092915050565b50565b60006123d96000836123be565b91506123e4826123c9565b600082019050919050565b60006123fa826123cc565b9150819050919050565b7f5769746864726177616c206661696c6564000000000000000000000000000000600082015250565b600061243a60118361207f565b915061244582612404565b602082019050919050565b600060208201905081810360008301526124698161242d565b9050919050565b7f496e76616c69642073656c6c6572206164647265737300000000000000000000600082015250565b60006124a660168361207f565b91506124b182612470565b602082019050919050565b600060208201905081810360008301526124d581612499565b9050919050565b7f5072696365206d7573742062652067726561746572207468616e207a65726f00600082015250565b6000612512601f8361207f565b915061251d826124dc565b602082019050919050565b6000602082019050818103600083015261254181612505565b9050919050565b7f5175616e74697479206d7573742062652067726561746572207468616e207a6560008201527f726f000000000000000000000000000000000000000000000000000000000000602082015250565b60006125a460228361207f565b91506125af82612548565b604082019050919050565b600060208201905081810360008301526125d381612597565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261263c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826125ff565b61264686836125ff565b95508019841693508086168417925050509392505050565b6000819050919050565b600061268361267e61267984611a32565b61265e565b611a32565b9050919050565b6000819050919050565b61269d83612668565b6126b16126a98261268a565b84845461260c565b825550505050565b600090565b6126c66126b9565b6126d1818484612694565b505050565b5b818110156126f5576126ea6000826126be565b6001810190506126d7565b5050565b601f82111561273a5761270b816125da565b612714846125ef565b81016020851015612723578190505b61273761272f856125ef565b8301826126d6565b50505b505050565b600082821c905092915050565b600061275d6000198460080261273f565b1980831691505092915050565b6000612776838361274c565b9150826002028217905092915050565b61278f82611b62565b67ffffffffffffffff8111156127a8576127a7612218565b5b6127b28254612276565b6127bd8282856126f9565b600060209050601f8311600181146127f057600084156127de578287015190505b6127e8858261276a565b865550612850565b601f1984166127fe866125da565b60005b8281101561282657848901518255600182019150602085019450602081019050612801565b86831015612843578489015161283f601f89168261274c565b8355505b6001600288020188555050505b505050505050565b82818337600083830152505050565b6000612873838561207f565b9350612880838584612858565b61288983611ba8565b840190509392505050565b600060608201905081810360008301526128af818688612867565b90506128be6020830185611ae0565b6128cb60408301846120c9565b95945050505050565b7f4f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e60008201527f6374696f6e000000000000000000000000000000000000000000000000000000602082015250565b600061293060258361207f565b915061293b826128d4565b604082019050919050565b6000602082019050818103600083015261295f81612923565b9050919050565b7f4665652070657263656e74206d757374206265203e3d20310000000000000000600082015250565b600061299c60188361207f565b91506129a782612966565b602082019050919050565b600060208201905081810360008301526129cb8161298f565b9050919050565b7f4665652070657263656e74206d757374206265203c3d20353000000000000000600082015250565b6000612a0860198361207f565b9150612a13826129d2565b602082019050919050565b60006020820190508181036000830152612a37816129fb565b9050919050565b7f4f7264657220646f6573206e6f74206578697374000000000000000000000000600082015250565b6000612a7460148361207f565b9150612a7f82612a3e565b602082019050919050565b60006020820190508181036000830152612aa381612a67565b9050919050565b7f4f6e6c79207468652062757965722063616e20636f6e6669726d2064656c697660008201527f6572790000000000000000000000000000000000000000000000000000000000602082015250565b6000612b0660238361207f565b9150612b1182612aaa565b604082019050919050565b60006020820190508181036000830152612b3581612af9565b9050919050565b7f4f7264657220697320616c72656164792064656c697665726564000000000000600082015250565b6000612b72601a8361207f565b9150612b7d82612b3c565b602082019050919050565b60006020820190508181036000830152612ba181612b65565b9050919050565b7f496e73756666696369656e7420636f6e74726163742062616c616e6365000000600082015250565b6000612bde601d8361207f565b9150612be982612ba8565b602082019050919050565b60006020820190508181036000830152612c0d81612bd1565b9050919050565b7f416d6f756e74206d7573742062652067726561746572207468616e207a65726f600082015250565b6000612c4a60208361207f565b9150612c5582612c14565b602082019050919050565b60006020820190508181036000830152612c7981612c3d565b9050919050565b7f4e6f7420656e6f7567682066756e647320696e2074686520636f6e7472616374600082015250565b6000612cb660208361207f565b9150612cc182612c80565b602082019050919050565b60006020820190508181036000830152612ce581612ca9565b9050919050565b7f50726f6475637420646f6573206e6f7420657869737400000000000000000000600082015250565b6000612d2260168361207f565b9150612d2d82612cec565b602082019050919050565b60006020820190508181036000830152612d5181612d15565b9050919050565b7f4e6f7420656e6f7567682073746f636b00000000000000000000000000000000600082015250565b6000612d8e60108361207f565b9150612d9982612d58565b602082019050919050565b60006020820190508181036000830152612dbd81612d81565b9050919050565b6000612dcf82611a32565b9150612dda83611a32565b9250828202612de881611a32565b91508282048414831517612dff57612dfe611a3c565b5b5092915050565b7f496e636f7272656374207061796d656e74000000000000000000000000000000600082015250565b6000612e3c60118361207f565b9150612e4782612e06565b602082019050919050565b60006020820190508181036000830152612e6b81612e2f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612eac82611a32565b9150612eb783611a32565b925082612ec757612ec6612e72565b5b828204905092915050565b6000612edd82611bf2565b9150612ee883611bf2565b9250828203905060ff811115612f0157612f00611a3c565b5b92915050565b6000604082019050612f1c6000830185611ae0565b612f296020830184611ae0565b939250505056fea264697066735822122012cf3456cfc9d9fc66aacb49cb6fffed0df1230d0010167365b96b3aaa25b30164736f6c634300081b0033";

type MarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Marketplace__factory extends ContractFactory {
  constructor(...args: MarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Marketplace & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Marketplace__factory {
    return super.connect(runner) as Marketplace__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketplaceInterface {
    return new Interface(_abi) as MarketplaceInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Marketplace {
    return new Contract(address, _abi, runner) as unknown as Marketplace;
  }
}
