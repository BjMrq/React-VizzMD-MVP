export default function(state = null, action) {
  switch (action.type) {
    case 'FLIP_BODY': {
      return action.payload;
    }
    default: {
      return "face";
    }
  }
}