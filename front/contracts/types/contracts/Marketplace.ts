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

export declare namespace Marketplace {
  export type ProductStruct = {
    id: BigNumberish;
    seller: AddressLike;
    title: string;
    price: BigNumberish;
    quantity: BigNumberish;
  };

  export type ProductStructOutput = [
    id: bigint,
    seller: string,
    title: string,
    price: bigint,
    quantity: bigint
  ] & {
    id: bigint;
    seller: string;
    title: string;
    price: bigint;
    quantity: bigint;
  };
}

export interface MarketplaceInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addProduct"
      | "buyProduct"
      | "contractBalance"
      | "feePercent"
      | "getAllProducts"
      | "getContractBalance"
      | "getProductQuantity"
      | "markOrderAsDelivered"
      | "orderCount"
      | "orders"
      | "owner"
      | "productCount"
      | "products"
      | "setFeePercent"
      | "withdrawContractBalance"
      | "withdrawFunds"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ContractBalanceWithdrawn"
      | "FundsWithdrawn"
      | "OrderDelivered"
      | "ProductAdded"
      | "ProductPurchased"
      | "Received"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addProduct",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyProduct",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "contractBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feePercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllProducts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getContractBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProductQuantity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "markOrderAsDelivered",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "orderCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "orders",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "productCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "products",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeePercent",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawContractBalance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFunds",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "addProduct", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyProduct", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "contractBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feePercent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllProducts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContractBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProductQuantity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "markOrderAsDelivered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "orderCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orders", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "productCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "products", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawContractBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFunds",
    data: BytesLike
  ): Result;
}

export namespace ContractBalanceWithdrawnEvent {
  export type InputTuple = [owner: AddressLike, amount: BigNumberish];
  export type OutputTuple = [owner: string, amount: bigint];
  export interface OutputObject {
    owner: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FundsWithdrawnEvent {
  export type InputTuple = [seller: AddressLike, amount: BigNumberish];
  export type OutputTuple = [seller: string, amount: bigint];
  export interface OutputObject {
    seller: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OrderDeliveredEvent {
  export type InputTuple = [
    orderId: BigNumberish,
    productId: BigNumberish,
    buyer: AddressLike
  ];
  export type OutputTuple = [orderId: bigint, productId: bigint, buyer: string];
  export interface OutputObject {
    orderId: bigint;
    productId: bigint;
    buyer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProductAddedEvent {
  export type InputTuple = [
    productId: BigNumberish,
    seller: AddressLike,
    title: string,
    price: BigNumberish,
    quantity: BigNumberish
  ];
  export type OutputTuple = [
    productId: bigint,
    seller: string,
    title: string,
    price: bigint,
    quantity: bigint
  ];
  export interface OutputObject {
    productId: bigint;
    seller: string;
    title: string;
    price: bigint;
    quantity: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProductPurchasedEvent {
  export type InputTuple = [
    orderId: BigNumberish,
    productId: BigNumberish,
    buyer: AddressLike,
    amountPaid: BigNumberish,
    fee: BigNumberish
  ];
  export type OutputTuple = [
    orderId: bigint,
    productId: bigint,
    buyer: string,
    amountPaid: bigint,
    fee: bigint
  ];
  export interface OutputObject {
    orderId: bigint;
    productId: bigint;
    buyer: string;
    amountPaid: bigint;
    fee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReceivedEvent {
  export type InputTuple = [sender: AddressLike, amount: BigNumberish];
  export type OutputTuple = [sender: string, amount: bigint];
  export interface OutputObject {
    sender: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Marketplace extends BaseContract {
  connect(runner?: ContractRunner | null): Marketplace;
  waitForDeployment(): Promise<this>;

  interface: MarketplaceInterface;

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

  addProduct: TypedContractMethod<
    [title: string, price: BigNumberish, quantity: BigNumberish],
    [void],
    "nonpayable"
  >;

  buyProduct: TypedContractMethod<
    [productId: BigNumberish, quantity: BigNumberish],
    [void],
    "payable"
  >;

  contractBalance: TypedContractMethod<[], [bigint], "view">;

  feePercent: TypedContractMethod<[], [bigint], "view">;

  getAllProducts: TypedContractMethod<
    [],
    [Marketplace.ProductStructOutput[]],
    "view"
  >;

  getContractBalance: TypedContractMethod<[], [bigint], "view">;

  getProductQuantity: TypedContractMethod<
    [productId: BigNumberish],
    [bigint],
    "view"
  >;

  markOrderAsDelivered: TypedContractMethod<
    [orderId: BigNumberish],
    [void],
    "nonpayable"
  >;

  orderCount: TypedContractMethod<[], [bigint], "view">;

  orders: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint, boolean, boolean] & {
        productId: bigint;
        buyer: string;
        amountPaid: bigint;
        isDelivered: boolean;
        isWithdrawn: boolean;
      }
    ],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  productCount: TypedContractMethod<[], [bigint], "view">;

  products: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, bigint, bigint] & {
        id: bigint;
        seller: string;
        title: string;
        price: bigint;
        quantity: bigint;
      }
    ],
    "view"
  >;

  setFeePercent: TypedContractMethod<
    [newFeePercent: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawContractBalance: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawFunds: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addProduct"
  ): TypedContractMethod<
    [title: string, price: BigNumberish, quantity: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "buyProduct"
  ): TypedContractMethod<
    [productId: BigNumberish, quantity: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "contractBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "feePercent"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAllProducts"
  ): TypedContractMethod<[], [Marketplace.ProductStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getContractBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getProductQuantity"
  ): TypedContractMethod<[productId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "markOrderAsDelivered"
  ): TypedContractMethod<[orderId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "orderCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "orders"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint, boolean, boolean] & {
        productId: bigint;
        buyer: string;
        amountPaid: bigint;
        isDelivered: boolean;
        isWithdrawn: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "productCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "products"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, bigint, bigint] & {
        id: bigint;
        seller: string;
        title: string;
        price: bigint;
        quantity: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "setFeePercent"
  ): TypedContractMethod<[newFeePercent: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawContractBalance"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawFunds"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "ContractBalanceWithdrawn"
  ): TypedContractEvent<
    ContractBalanceWithdrawnEvent.InputTuple,
    ContractBalanceWithdrawnEvent.OutputTuple,
    ContractBalanceWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "FundsWithdrawn"
  ): TypedContractEvent<
    FundsWithdrawnEvent.InputTuple,
    FundsWithdrawnEvent.OutputTuple,
    FundsWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "OrderDelivered"
  ): TypedContractEvent<
    OrderDeliveredEvent.InputTuple,
    OrderDeliveredEvent.OutputTuple,
    OrderDeliveredEvent.OutputObject
  >;
  getEvent(
    key: "ProductAdded"
  ): TypedContractEvent<
    ProductAddedEvent.InputTuple,
    ProductAddedEvent.OutputTuple,
    ProductAddedEvent.OutputObject
  >;
  getEvent(
    key: "ProductPurchased"
  ): TypedContractEvent<
    ProductPurchasedEvent.InputTuple,
    ProductPurchasedEvent.OutputTuple,
    ProductPurchasedEvent.OutputObject
  >;
  getEvent(
    key: "Received"
  ): TypedContractEvent<
    ReceivedEvent.InputTuple,
    ReceivedEvent.OutputTuple,
    ReceivedEvent.OutputObject
  >;

  filters: {
    "ContractBalanceWithdrawn(address,uint256)": TypedContractEvent<
      ContractBalanceWithdrawnEvent.InputTuple,
      ContractBalanceWithdrawnEvent.OutputTuple,
      ContractBalanceWithdrawnEvent.OutputObject
    >;
    ContractBalanceWithdrawn: TypedContractEvent<
      ContractBalanceWithdrawnEvent.InputTuple,
      ContractBalanceWithdrawnEvent.OutputTuple,
      ContractBalanceWithdrawnEvent.OutputObject
    >;

    "FundsWithdrawn(address,uint256)": TypedContractEvent<
      FundsWithdrawnEvent.InputTuple,
      FundsWithdrawnEvent.OutputTuple,
      FundsWithdrawnEvent.OutputObject
    >;
    FundsWithdrawn: TypedContractEvent<
      FundsWithdrawnEvent.InputTuple,
      FundsWithdrawnEvent.OutputTuple,
      FundsWithdrawnEvent.OutputObject
    >;

    "OrderDelivered(uint256,uint256,address)": TypedContractEvent<
      OrderDeliveredEvent.InputTuple,
      OrderDeliveredEvent.OutputTuple,
      OrderDeliveredEvent.OutputObject
    >;
    OrderDelivered: TypedContractEvent<
      OrderDeliveredEvent.InputTuple,
      OrderDeliveredEvent.OutputTuple,
      OrderDeliveredEvent.OutputObject
    >;

    "ProductAdded(uint256,address,string,uint256,uint8)": TypedContractEvent<
      ProductAddedEvent.InputTuple,
      ProductAddedEvent.OutputTuple,
      ProductAddedEvent.OutputObject
    >;
    ProductAdded: TypedContractEvent<
      ProductAddedEvent.InputTuple,
      ProductAddedEvent.OutputTuple,
      ProductAddedEvent.OutputObject
    >;

    "ProductPurchased(uint256,uint256,address,uint256,uint256)": TypedContractEvent<
      ProductPurchasedEvent.InputTuple,
      ProductPurchasedEvent.OutputTuple,
      ProductPurchasedEvent.OutputObject
    >;
    ProductPurchased: TypedContractEvent<
      ProductPurchasedEvent.InputTuple,
      ProductPurchasedEvent.OutputTuple,
      ProductPurchasedEvent.OutputObject
    >;

    "Received(address,uint256)": TypedContractEvent<
      ReceivedEvent.InputTuple,
      ReceivedEvent.OutputTuple,
      ReceivedEvent.OutputObject
    >;
    Received: TypedContractEvent<
      ReceivedEvent.InputTuple,
      ReceivedEvent.OutputTuple,
      ReceivedEvent.OutputObject
    >;
  };
}
