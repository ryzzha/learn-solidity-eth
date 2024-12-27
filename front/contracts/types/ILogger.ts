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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface ILoggerInterface extends Interface {
  getFunction(nameOrSignature: "getEntry" | "log"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getEntry",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "log",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "getEntry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "log", data: BytesLike): Result;
}

export interface ILogger extends BaseContract {
  connect(runner?: ContractRunner | null): ILogger;
  waitForDeployment(): Promise<this>;

  interface: ILoggerInterface;

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

  getEntry: TypedContractMethod<
    [_from: AddressLike, index: BigNumberish],
    [bigint],
    "view"
  >;

  log: TypedContractMethod<
    [_from: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getEntry"
  ): TypedContractMethod<
    [_from: AddressLike, index: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "log"
  ): TypedContractMethod<
    [_from: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  filters: {};
}
