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
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  ReentrancyAttack,
  ReentrancyAttackInterface,
} from "../../../contracts/Reentrancy.sol/ReentrancyAttack";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "bank_contract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "attackBank",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bank",
    outputs: [
      {
        internalType: "contract VulnerableBankContract",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentBalance",
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
    name: "proxyDepositToBank",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610589380380610589833981810160405281019061003291906100db565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610108565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100a88261007d565b9050919050565b6100b88161009d565b81146100c357600080fd5b50565b6000815190506100d5816100af565b92915050565b6000602082840312156100f1576100f0610078565b5b60006100ff848285016100c6565b91505092915050565b610472806101176000396000f3fe6080604052600436106100435760003560e01c806376cdb03b146101685780638f667ead14610193578063b49a71851461019d578063ce845d1d146101b457610163565b366101635760008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ce845d1d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100da919061034b565b11156101615760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561014857600080fd5b505af115801561015c573d6000803e3d6000fd5b505050505b005b600080fd5b34801561017457600080fd5b5061017d6101df565b60405161018a91906103f7565b60405180910390f35b61019b610203565b005b3480156101a957600080fd5b506101b2610286565b005b3480156101c057600080fd5b506101c9610308565b6040516101d69190610421565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561026b57600080fd5b505af115801561027f573d6000803e3d6000fd5b5050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156102ee57600080fd5b505af1158015610302573d6000803e3d6000fd5b50505050565b600047905090565b600080fd5b6000819050919050565b61032881610315565b811461033357600080fd5b50565b6000815190506103458161031f565b92915050565b60006020828403121561036157610360610310565b5b600061036f84828501610336565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006103bd6103b86103b384610378565b610398565b610378565b9050919050565b60006103cf826103a2565b9050919050565b60006103e1826103c4565b9050919050565b6103f1816103d6565b82525050565b600060208201905061040c60008301846103e8565b92915050565b61041b81610315565b82525050565b60006020820190506104366000830184610412565b9291505056fea264697066735822122038c5f9219e51e5e6f5ffb2908bd0f0f7b517a9f4c13c616e872e23474dd0f04464736f6c634300081b0033";

type ReentrancyAttackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReentrancyAttackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReentrancyAttack__factory extends ContractFactory {
  constructor(...args: ReentrancyAttackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    bank_contract: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(bank_contract, overrides || {});
  }
  override deploy(
    bank_contract: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(bank_contract, overrides || {}) as Promise<
      ReentrancyAttack & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ReentrancyAttack__factory {
    return super.connect(runner) as ReentrancyAttack__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReentrancyAttackInterface {
    return new Interface(_abi) as ReentrancyAttackInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ReentrancyAttack {
    return new Contract(address, _abi, runner) as unknown as ReentrancyAttack;
  }
}
