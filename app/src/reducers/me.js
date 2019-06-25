const initialState =
{
	id                    : null,
	device                : null,
	canSendMic            : false,
	canSendWebcam         : false,
	canShareScreen        : false,
	canShareFiles         : false,
	audioDevices          : null,
	webcamDevices         : null,
	webcamInProgress      : false,
	audioInProgress       : false,
	screenShareInProgress : false,
	loginEnabled          : false,
	raiseHand             : false,
	raiseHandInProgress   : false,
	loggedIn              : false
};

const me = (state = initialState, action) =>
{
	switch (action.type)
	{
		case 'SET_ME':
		{
			const {
				peerId,
				device,
				loginEnabled
			} = action.payload;

			return {
				...state,
				id : peerId,
				device,
				loginEnabled
			};
		}

		case 'LOGGED_IN':
			return { ...state, loggedIn: true };

		case 'USER_LOGOUT':
			return { ...state, loggedIn: false };

		case 'SET_MEDIA_CAPABILITIES':
		{
			const {
				canSendMic,
				canSendWebcam,
				canShareScreen,
				canShareFiles
			} = action.payload;

			return {
				...state,
				canSendMic,
				canSendWebcam,
				canShareScreen,
				canShareFiles
			};
		}

		case 'SET_AUDIO_DEVICES':
		{
			const { devices } = action.payload;

			return { ...state, audioDevices: devices };
		}

		case 'SET_WEBCAM_DEVICES':
		{
			const { devices } = action.payload;

			return { ...state, webcamDevices: devices };
		}

		case 'SET_AUDIO_IN_PROGRESS':
		{
			const { flag } = action.payload;

			return { ...state, audioInProgress: flag };
		}

		case 'SET_WEBCAM_IN_PROGRESS':
		{
			const { flag } = action.payload;

			return { ...state, webcamInProgress: flag };
		}

		case 'SET_SCREEN_SHARE_IN_PROGRESS':
		{
			const { flag } = action.payload;

			return { ...state, screenShareInProgress: flag };
		}

		case 'SET_MY_RAISE_HAND_STATE':
		{
			const { flag } = action.payload;

			return { ...state, raiseHand: flag };
		}

		case 'SET_MY_RAISE_HAND_STATE_IN_PROGRESS':
		{
			const { flag } = action.payload;

			return { ...state, raiseHandInProgress: flag };
		}

		default:
			return state;
	}
};

export default me;