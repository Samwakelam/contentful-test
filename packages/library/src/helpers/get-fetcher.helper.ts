type ParametersProps = {
  method: string;
  headers: HeadersInit;
  body?: BodyInit;
};

export const getFetcher = async (
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: unknown
) => {
  const parameters: ParametersProps = {
    method: method,
    headers: {},
  };

  if (body) {
    parameters.body = JSON.stringify(body);
    parameters.headers = { 'Content-Type': 'application/json' };
  }

  try {
    const fetchData = await fetch(url, parameters);
    const response = await fetchData.json();

    return response;
  } catch (error: any) {
    return { message: error.message };
  }
};
