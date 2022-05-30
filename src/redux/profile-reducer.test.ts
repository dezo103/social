import profileReducer, {addPostAC} from "./profile-reducer";

it('length of post should br incremented', () => {

    // 1.test data
    let action = addPostAC("it-kama")
    const state: any = {
        postData: [
            {id: 1, message: "Hi hi hi", likesCount: 12},
            {id: 5, message: "cryptocurency - is the best investment", likesCount: 12},
        ]
    }

    // 2. action
    let newState = profileReducer(state ,action)

    //3. expectation
    expect(newState.postData.length).toBe(3)
})

