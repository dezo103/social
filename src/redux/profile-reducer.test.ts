import profileReducer, {addPostAC, deletePost} from "./profile-reducer";

const state: any = {
    postData: [
        {id: 1, message: "Hi hi hi", likesCount: 12},
        {id: 5, message: "cryptocurency - is the best investment", likesCount: 12},
    ]
}

it('length of post should be incremented', () => {

    // 1.test data
    let action = addPostAC("it-kama")

    // 2. action
    let newState = profileReducer(state ,action)

    //3. expectation
    expect(newState.postData.length).toBe(3)
    expect(newState.postData[2].message).toBe("it-kama")
    expect(newState.postData[2].likesCount).toBe(0)
})

it('message of new post should be correct ', () => {

    // 1.test data
    let action = addPostAC("it-kama")

    // 2. action
    let newState = profileReducer(state ,action)

    //3. expectation
    expect(newState.postData[2].message).toBe("it-kama")
})

it('postData likesCount should be correct', () => {

    // 1.test data
    let action = addPostAC("it-kama")

    // 2. action
    let newState = profileReducer(state ,action)

    //3. expectation
    expect(newState.postData[2].likesCount).toBe(0)
})

it('length of after deleting post should be decremented', () => {

    // 1.test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state ,action)

    //3. expectation
    expect(newState.postData.length).toBe(1)
})

it('length of after deleting post should not be decremented if id is not correct', () => {

    // 1.test data
    let action = deletePost(12)

    // 2. action
    let newState = profileReducer(state ,action)

    //3. expectation
    expect(newState.postData.length).toBe(2)
})

