import { AbortableRequest } from '../../models/abortable-request';
import { EngineResponse } from '../../models/engine-response';
import { generateQueryString } from '../../shared';
import { SERVER_URL, SERVER_ROUTES } from '../services-base';

const url = `${SERVER_URL}${SERVER_ROUTES.engine}`;

export const changeStatus = async (
  carId: number,
  status: 'started' | 'stopped'
): Promise<EngineResponse> => {
  const queryParams = {
    id: carId,
    status
  };
  const queryString = generateQueryString(queryParams);
  const response = await fetch(`${url}${queryString}`);
  const engineRes: EngineResponse = await response.json();
  return engineRes;
};

export const drive = (
  carId: number,
  status: 'drive'
): AbortableRequest<{ success: true }> => {
  const queryParams = {
    id: carId,
    status
  };

  const abortController = new AbortController();

  const request: AbortableRequest<{ success: true }> = {
    async request() {
      const queryString = generateQueryString(queryParams);
      const response = await fetch(`${url}${queryString}`, { signal: abortController.signal });
      return response.json();
    },
    abort() {
      abortController.abort();
    }
  };
  return request;
};
