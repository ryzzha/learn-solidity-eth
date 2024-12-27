/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface DemoInterface extends Interface {
  getFunction(nameOrSignature: "owner" | "pay" | "withdraw"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Paid"): EventFragment;

  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace PaidEvent {
  export type InputTuple = [
    _from: AddressLike,
    _amount: BigNumberish,
    _timestamp: BigNumberish
  ];
  export type OutputTuple = [
    _from: string,
    _amount: bigint,
    _timestamp: bigint
  ];
  export interface OutputObject {
    _from: string;
    _amount: bigint;
    _timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Demo extends BaseContract {
  connect(runner?: ContractRunner | null): Demo;
  waitForDeployment(): Promise<this>;

  interface: DemoInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  owner: TypedContractMethod<[], [string], "view">;

  pay: TypedContractMethod<[], [void], "payable">;

  withdraw: TypedContractMethod<[_to: AddressLike], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pay"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[_to: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "Paid"
  ): TypedContractEvent<
    PaidEvent.InputTuple,
    PaidEvent.OutputTuple,
    PaidEvent.OutputObject
  >;

  filters: {
    "Paid(address,uint256,uint256)": TypedContractEvent<
      PaidEvent.InputTuple,
      PaidEvent.OutputTuple,
      PaidEvent.OutputObject
    >;
    Paid: TypedContractEvent<
      PaidEvent.InputTuple,
      PaidEvent.OutputTuple,
      PaidEvent.OutputObject
    >;
  };
}
