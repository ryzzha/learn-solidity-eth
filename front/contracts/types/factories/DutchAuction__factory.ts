/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { DutchAuction, DutchAuctionInterface } from "../DutchAuction";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_startingPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_discountRate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_item",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "Bought",
    type: "event",
  },
  {
    inputs: [],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "discountRate",
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
    name: "endsAt",
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
    name: "getPrice",
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
    name: "item",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "seller",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startAt",
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
    name: "startingPrice",
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
    name: "stopped",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61012060405234801561001157600080fd5b50604051611237380380611237833981810160405281019061003391906102aa565b62015180826100429190610348565b831015610084576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161007b906103e7565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508260a081815250508161010081815250504260c0818152505062015180426100e09190610407565b60e0818152505080600090816100f69190610652565b50505050610724565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61012681610113565b811461013157600080fd5b50565b6000815190506101438161011d565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61019c82610153565b810181811067ffffffffffffffff821117156101bb576101ba610164565b5b80604052505050565b60006101ce6100ff565b90506101da8282610193565b919050565b600067ffffffffffffffff8211156101fa576101f9610164565b5b61020382610153565b9050602081019050919050565b60005b8381101561022e578082015181840152602081019050610213565b60008484015250505050565b600061024d610248846101df565b6101c4565b9050828152602081018484840111156102695761026861014e565b5b610274848285610210565b509392505050565b600082601f83011261029157610290610149565b5b81516102a184826020860161023a565b91505092915050565b6000806000606084860312156102c3576102c2610109565b5b60006102d186828701610134565b93505060206102e286828701610134565b925050604084015167ffffffffffffffff8111156103035761030261010e565b5b61030f8682870161027c565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061035382610113565b915061035e83610113565b925082820261036c81610113565b9150828204841483151761038357610382610319565b5b5092915050565b600082825260208201905092915050565b7f707269636520746f6f206c6f7721000000000000000000000000000000000000600082015250565b60006103d1600e8361038a565b91506103dc8261039b565b602082019050919050565b60006020820190508181036000830152610400816103c4565b9050919050565b600061041282610113565b915061041d83610113565b925082820190508082111561043557610434610319565b5b92915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061048d57607f821691505b6020821081036104a05761049f610446565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026105087fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826104cb565b61051286836104cb565b95508019841693508086168417925050509392505050565b6000819050919050565b600061054f61054a61054584610113565b61052a565b610113565b9050919050565b6000819050919050565b61056983610534565b61057d61057582610556565b8484546104d8565b825550505050565b600090565b610592610585565b61059d818484610560565b505050565b5b818110156105c1576105b660008261058a565b6001810190506105a3565b5050565b601f821115610606576105d7816104a6565b6105e0846104bb565b810160208510156105ef578190505b6106036105fb856104bb565b8301826105a2565b50505b505050565b600082821c905092915050565b60006106296000198460080261060b565b1980831691505092915050565b60006106428383610618565b9150826002028217905092915050565b61065b8261043b565b67ffffffffffffffff81111561067457610673610164565b5b61067e8254610475565b6106898282856105c5565b600060209050601f8311600181146106bc57600084156106aa578287015190505b6106b48582610636565b86555061071c565b601f1984166106ca866104a6565b60005b828110156106f2578489015182556001820191506020850194506020810190506106cd565b8683101561070f578489015161070b601f891682610618565b8355505b6001600288020188555050505b505050505050565b60805160a05160c05160e05161010051610aac61078b600039600081816102f301526105bb01526000818161023501526103a30152600081816102c20152610573015260008181610321015261059701526000818161021101526104b50152610aac6000f3fe6080604052600436106100915760003560e01c8063a6f2ae3a11610059578063a6f2ae3a14610159578063c744656514610163578063d6fbf2021461018e578063e6c0e6d5146101b9578063f2a4a82e146101e457610091565b806308551a53146100965780630a09284a146100c157806375f12b21146100ec57806383788fce1461011757806398d5fdca1461012e575b600080fd5b3480156100a257600080fd5b506100ab61020f565b6040516100b891906106ac565b60405180910390f35b3480156100cd57600080fd5b506100d6610233565b6040516100e391906106e0565b60405180910390f35b3480156100f857600080fd5b50610101610257565b60405161010e9190610716565b60405180910390f35b34801561012357600080fd5b5061012c61026a565b005b34801561013a57600080fd5b5061014361026c565b60405161015091906106e0565b60405180910390f35b610161610351565b005b34801561016f57600080fd5b50610178610571565b60405161018591906106e0565b60405180910390f35b34801561019a57600080fd5b506101a3610595565b6040516101b091906106e0565b60405180910390f35b3480156101c557600080fd5b506101ce6105b9565b6040516101db91906106e0565b60405180910390f35b3480156101f057600080fd5b506101f96105dd565b60405161020691906107c1565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b600160009054906101000a900460ff1681565b565b6000600160009054906101000a900460ff16156102be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b59061082f565b60405180910390fd5b60007f0000000000000000000000000000000000000000000000000000000000000000426102ec919061087e565b90506000817f000000000000000000000000000000000000000000000000000000000000000061031c91906108b2565b9050807f000000000000000000000000000000000000000000000000000000000000000061034a919061087e565b9250505090565b600160009054906101000a900460ff16156103a1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103989061082f565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000004210610403576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103fa90610940565b60405180910390fd5b600061040d61026c565b905080341015610452576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610449906109ac565b60405180910390fd5b60008134610460919061087e565b905060008111156104b3573373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156104b1573d6000803e3d6000fd5b505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610519573d6000803e3d6000fd5b5060018060006101000a81548160ff0219169083151502179055507fc54c8cc1c7525b424ec71b685c00d9355581a280488018c22005332ceb2fd40682336040516105659291906109ed565b60405180910390a15050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080546105ea90610a45565b80601f016020809104026020016040519081016040528092919081815260200182805461061690610a45565b80156106635780601f1061063857610100808354040283529160200191610663565b820191906000526020600020905b81548152906001019060200180831161064657829003601f168201915b505050505081565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106968261066b565b9050919050565b6106a68161068b565b82525050565b60006020820190506106c1600083018461069d565b92915050565b6000819050919050565b6106da816106c7565b82525050565b60006020820190506106f560008301846106d1565b92915050565b60008115159050919050565b610710816106fb565b82525050565b600060208201905061072b6000830184610707565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561076b578082015181840152602081019050610750565b60008484015250505050565b6000601f19601f8301169050919050565b600061079382610731565b61079d818561073c565b93506107ad81856020860161074d565b6107b681610777565b840191505092915050565b600060208201905081810360008301526107db8184610788565b905092915050565b7f68617320616c72656164792073746f7070656421000000000000000000000000600082015250565b600061081960148361073c565b9150610824826107e3565b602082019050919050565b600060208201905081810360008301526108488161080c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610889826106c7565b9150610894836106c7565b92508282039050818111156108ac576108ab61084f565b5b92915050565b60006108bd826106c7565b91506108c8836106c7565b92508282026108d6816106c7565b915082820484148315176108ed576108ec61084f565b5b5092915050565b7f746f6f206c617465210000000000000000000000000000000000000000000000600082015250565b600061092a60098361073c565b9150610935826108f4565b602082019050919050565b600060208201905081810360008301526109598161091d565b9050919050565b7f746f6f206c6f7721000000000000000000000000000000000000000000000000600082015250565b600061099660088361073c565b91506109a182610960565b602082019050919050565b600060208201905081810360008301526109c581610989565b9050919050565b60006109d78261066b565b9050919050565b6109e7816109cc565b82525050565b6000604082019050610a0260008301856106d1565b610a0f60208301846109de565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610a5d57607f821691505b602082108103610a7057610a6f610a16565b5b5091905056fea26469706673582212205f62e28fecffdfb30706930ae15a9299f5d3bcf63abe4133d46edd01bbbd18d464736f6c634300081b0033";

type DutchAuctionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DutchAuctionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DutchAuction__factory extends ContractFactory {
  constructor(...args: DutchAuctionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _startingPrice: BigNumberish,
    _discountRate: BigNumberish,
    _item: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _startingPrice,
      _discountRate,
      _item,
      overrides || {}
    );
  }
  override deploy(
    _startingPrice: BigNumberish,
    _discountRate: BigNumberish,
    _item: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _startingPrice,
      _discountRate,
      _item,
      overrides || {}
    ) as Promise<
      DutchAuction & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DutchAuction__factory {
    return super.connect(runner) as DutchAuction__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DutchAuctionInterface {
    return new Interface(_abi) as DutchAuctionInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DutchAuction {
    return new Contract(address, _abi, runner) as unknown as DutchAuction;
  }
}
