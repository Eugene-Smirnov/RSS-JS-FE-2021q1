import { AbortableRequest } from '../../models/abortable-request';
import { EngineResponse } from '../../models/engine-response';
import * as engineRepo from './engine-repo';

export const start = async (
  carId: number,
  status: 'started'
): Promise<EngineResponse> => engineRepo.changeStatus(carId, status);

export const stop = async (
  carId: number,
  status: 'stopped'
): Promise<EngineResponse> => engineRepo.changeStatus(carId, status);

export const drive = (
  carId: number,
  status: 'drive'
): AbortableRequest<{ success: true }> => engineRepo.drive(carId, status);
