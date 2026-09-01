export interface ILocationPosition {
    readonly isSuccess: boolean;
    readonly positionSuccess?: ILocationPositionSuccess;
    readonly positionError?: ILocationPositionError;
}
export interface ILocationPositionSuccess {
    readonly coords?: ILocationCoordinates;
}
export interface ILocationCoordinates {
    readonly latitude: number;
    readonly longitude: number;
}
export interface ILocationPositionError {
    readonly code: number;
    readonly message: string;
}
//# sourceMappingURL=ILocationPosition.d.ts.map