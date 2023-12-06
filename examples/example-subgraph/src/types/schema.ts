// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  BigDecimal,
  BigInt,
  Bytes,
  Entity,
  store,
  TypedMap,
  Value,
  ValueKind,
} from '@starknet-graph/graph-ts';

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set('id', Value.fromString(id));
  }

  save(): void {
    let id = this.get('id');
    assert(id != null, 'Cannot save ExampleEntity entity without an ID');
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ExampleEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set('ExampleEntity', id.toString(), this);
    }
  }

  static loadInBlock(id: string): ExampleEntity | null {
    return changetype<ExampleEntity | null>(store.get_in_block('ExampleEntity', id));
  }

  static load(id: string): ExampleEntity | null {
    return changetype<ExampleEntity | null>(store.get('ExampleEntity', id));
  }

  get id(): string {
    let value = this.get('id');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set('id', Value.fromString(value));
  }

  get optionalBoolean(): boolean {
    let value = this.get('optionalBoolean');
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set optionalBoolean(value: boolean) {
    this.set('optionalBoolean', Value.fromBoolean(value));
  }

  get requiredBoolean(): boolean {
    let value = this.get('requiredBoolean');
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set requiredBoolean(value: boolean) {
    this.set('requiredBoolean', Value.fromBoolean(value));
  }

  get optionalBooleanList(): Array<boolean> | null {
    let value = this.get('optionalBooleanList');
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBooleanArray();
    }
  }

  set optionalBooleanList(value: Array<boolean> | null) {
    if (!value) {
      this.unset('optionalBooleanList');
    } else {
      this.set('optionalBooleanList', Value.fromBooleanArray(<Array<boolean>>value));
    }
  }

  get requiredBooleanList(): Array<boolean> {
    let value = this.get('requiredBooleanList');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBooleanArray();
    }
  }

  set requiredBooleanList(value: Array<boolean>) {
    this.set('requiredBooleanList', Value.fromBooleanArray(value));
  }

  get optionalString(): string | null {
    let value = this.get('optionalString');
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set optionalString(value: string | null) {
    if (!value) {
      this.unset('optionalString');
    } else {
      this.set('optionalString', Value.fromString(<string>value));
    }
  }

  get requiredString(): string {
    let value = this.get('requiredString');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set requiredString(value: string) {
    this.set('requiredString', Value.fromString(value));
  }

  get optionalStringList(): Array<string> | null {
    let value = this.get('optionalStringList');
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set optionalStringList(value: Array<string> | null) {
    if (!value) {
      this.unset('optionalStringList');
    } else {
      this.set('optionalStringList', Value.fromStringArray(<Array<string>>value));
    }
  }

  get requiredStringList(): Array<string> {
    let value = this.get('requiredStringList');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toStringArray();
    }
  }

  set requiredStringList(value: Array<string>) {
    this.set('requiredStringList', Value.fromStringArray(value));
  }

  get optionalBytes(): Bytes | null {
    let value = this.get('optionalBytes');
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set optionalBytes(value: Bytes | null) {
    if (!value) {
      this.unset('optionalBytes');
    } else {
      this.set('optionalBytes', Value.fromBytes(<Bytes>value));
    }
  }

  get requiredBytes(): Bytes {
    let value = this.get('requiredBytes');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBytes();
    }
  }

  set requiredBytes(value: Bytes) {
    this.set('requiredBytes', Value.fromBytes(value));
  }

  get optionalBytesList(): Array<Bytes> | null {
    let value = this.get('optionalBytesList');
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set optionalBytesList(value: Array<Bytes> | null) {
    if (!value) {
      this.unset('optionalBytesList');
    } else {
      this.set('optionalBytesList', Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get requiredBytesList(): Array<Bytes> {
    let value = this.get('requiredBytesList');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBytesArray();
    }
  }

  set requiredBytesList(value: Array<Bytes>) {
    this.set('requiredBytesList', Value.fromBytesArray(value));
  }

  get optionalInt(): i32 {
    let value = this.get('optionalInt');
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set optionalInt(value: i32) {
    this.set('optionalInt', Value.fromI32(value));
  }

  get requiredInt(): i32 {
    let value = this.get('requiredInt');
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set requiredInt(value: i32) {
    this.set('requiredInt', Value.fromI32(value));
  }

  get optionalIntList(): Array<i32> | null {
    let value = this.get('optionalIntList');
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toI32Array();
    }
  }

  set optionalIntList(value: Array<i32> | null) {
    if (!value) {
      this.unset('optionalIntList');
    } else {
      this.set('optionalIntList', Value.fromI32Array(<Array<i32>>value));
    }
  }

  get requiredIntList(): Array<i32> {
    let value = this.get('requiredIntList');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toI32Array();
    }
  }

  set requiredIntList(value: Array<i32>) {
    this.set('requiredIntList', Value.fromI32Array(value));
  }

  get optionalBigInt(): BigInt | null {
    let value = this.get('optionalBigInt');
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set optionalBigInt(value: BigInt | null) {
    if (!value) {
      this.unset('optionalBigInt');
    } else {
      this.set('optionalBigInt', Value.fromBigInt(<BigInt>value));
    }
  }

  get requiredBigInt(): BigInt {
    let value = this.get('requiredBigInt');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set requiredBigInt(value: BigInt) {
    this.set('requiredBigInt', Value.fromBigInt(value));
  }

  get optionalBigIntList(): Array<BigInt> | null {
    let value = this.get('optionalBigIntList');
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set optionalBigIntList(value: Array<BigInt> | null) {
    if (!value) {
      this.unset('optionalBigIntList');
    } else {
      this.set('optionalBigIntList', Value.fromBigIntArray(<Array<BigInt>>value));
    }
  }

  get requiredBigIntList(): Array<BigInt> {
    let value = this.get('requiredBigIntList');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigIntArray();
    }
  }

  set requiredBigIntList(value: Array<BigInt>) {
    this.set('requiredBigIntList', Value.fromBigIntArray(value));
  }

  get optionalReference(): string | null {
    let value = this.get('optionalReference');
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set optionalReference(value: string | null) {
    if (!value) {
      this.unset('optionalReference');
    } else {
      this.set('optionalReference', Value.fromString(<string>value));
    }
  }

  get requiredReference(): string {
    let value = this.get('requiredReference');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set requiredReference(value: string) {
    this.set('requiredReference', Value.fromString(value));
  }

  get optionalReferenceList(): Array<string> | null {
    let value = this.get('optionalReferenceList');
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set optionalReferenceList(value: Array<string> | null) {
    if (!value) {
      this.unset('optionalReferenceList');
    } else {
      this.set('optionalReferenceList', Value.fromStringArray(<Array<string>>value));
    }
  }

  get requiredReferenceList(): Array<string> {
    let value = this.get('requiredReferenceList');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toStringArray();
    }
  }

  set requiredReferenceList(value: Array<string>) {
    this.set('requiredReferenceList', Value.fromStringArray(value));
  }
}

export class OtherEntity extends Entity {
  constructor(id: string) {
    super();
    this.set('id', Value.fromString(id));
  }

  save(): void {
    let id = this.get('id');
    assert(id != null, 'Cannot save OtherEntity entity without an ID');
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type OtherEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set('OtherEntity', id.toString(), this);
    }
  }

  static loadInBlock(id: string): OtherEntity | null {
    return changetype<OtherEntity | null>(store.get_in_block('OtherEntity', id));
  }

  static load(id: string): OtherEntity | null {
    return changetype<OtherEntity | null>(store.get('OtherEntity', id));
  }

  get id(): string {
    let value = this.get('id');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set('id', Value.fromString(value));
  }
}
