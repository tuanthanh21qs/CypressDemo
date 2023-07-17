import { type RpcError } from 'grpc-web';

const DEFAULT_METADATA = {
  'Content-Type': 'application/grpc-web',
};

class GrpcService<T> {
  #service: T = null as T;
  setService(service: T) {
    this.#service = service;
  }

  grpc(executor: any, req: any, metadata?: any) {
    if (!this.#service) throw new Error('Add service before call gRPC.');

    metadata = { ...DEFAULT_METADATA, ...metadata };

    return new Promise((resolve, reject) => {
      executor.call(
        this.#service,
        req,
        metadata,
        (error: RpcError, res: any) => {
          if (error) return reject(error);
          return resolve(res?.toObject());
        }
      );
    });
  }
}

export const baseGRPC = new GrpcService();
