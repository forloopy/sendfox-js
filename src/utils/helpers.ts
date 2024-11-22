export const buildQueryString = (params: Record<string, string | string[]>): string => {
    return Object.entries(params)
        .map(([key, value]: [string, string | string[]]) => 
            Array.isArray(value) 
                ? value.map(val => `${encodeURIComponent(key)}[]=${encodeURIComponent(val)}`).join('&') 
                : `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join('&');
}