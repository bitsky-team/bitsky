export interface ISession {
	language: string
	token?: string
}

export interface ISessionAction {
	type: string
	payload: ISession
}

export interface ISessionReducer {
	[actionType: string]: (state: ISession, payload: ISession) => ISession
}
