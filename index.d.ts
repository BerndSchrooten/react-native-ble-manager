export interface advertisingAndroid {
  localName: string;
  isConnectable: boolean;
  manufacturerData: {
    bytes: ArrayBuffer;
    data: string;
  }
}

export interface advertisingIOS {
  kCBAdvDataChannel: number;
  kCBAdvDataIsConnectable: number;
  kCBAdvDataLocalName: string;
  kCBAdvDataManufacturerData: {
    bytes: any;
    data: string;
  }
}

export interface PeripheralInfo {
  id: string;
  name: string;
  rssi: number;
  advertising: advertisingAndroid | advertisingIOS;
}

export interface DidUpdateStateArgs {
  state: string;
}

export interface StartOptions {
  showAlert?: boolean;
  restoreIdentifierKey?: string;
  forceLegacy?: boolean;
}

export function start(options?: StartOptions): Promise<void>;

export interface ScanningOptions {
  numberOfMatches?: number;
  matchMode?: number;
  scanMode?: number;
}

export function scan(serviceUUIDs: string[], seconds: number, allowDuplicates: boolean, scanningOptions?: ScanningOptions): Promise<void>;

export function stopScan(): Promise<void>;

export function connect(peripheralId: string): Promise<void>;

export function disconnect(peripheralId: string): Promise<void>;

// Android only
export function enableBluetooth(): Promise<void>;

// Android only
export function enableBluetoothAsAdmin(): Promise<void>;

export function checkState(): void;

export function startNotification(peripheralId: string, serviceUUID: string, characteristicUUID: string): Promise<void>;

export function stopNotification(peripheralId: string, serviceUUID: string, characteristicUUID: string): Promise<void>;

export function read(peripheralId: string, serviceUUID: string, characteristicUUID: string): Promise<ArrayBuffer>;

export function write(peripheralId: string, serviceUUID: string, characteristicUUID: string, data: any[], maxByteSize?: number): Promise<void>;

export function writeWithoutResponse(peripheralId: string, serviceUUID: string, characteristicUUID: string, data: any[], maxByteSize?: number, queueSleepTime?: number): Promise<void>;

export function readRSSI(peripheralId: string): Promise<string>;

// Android only (API 21+)
export function requestConnectionPriority(peripheralId: string, connectionPriority: 0 | 1 | 2): Promise<boolean>;

// Android only (API 21+)
export function requestMTU(peripheralId: string, mtu: number): Promise<number>;

// ServiceUUIDS: iOS only
export function retrieveServices(peripheralId: string, serviceUUIDS?: string[]): Promise<PeripheralInfo>;

export function refreshCache(peripheralId: string): Promise<PeripheralInfo>;

export function getConnectedPeripherals(serviceUUIDs: string[]): Promise<PeripheralInfo[]>;

export function createBond(peripheralId: string): Promise<void>;

export function removeBond(peripheralId: string): Promise<void>;

// Android Only
export function getBondedPeripherals(): Promise<PeripheralInfo[]>;

export function getDiscoveredPeripherals(): Promise<PeripheralInfo[]>;

//Android only
export function removePeripheral(peripheralId: string): Promise<void>

export function isPeripheralConnected(peripheralId: string, serviceUUIDS?: string[]): Promise<boolean>








