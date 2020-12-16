import {shortenText} from '../../src/utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test('shortenText does not alter a string under 100 chars', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

test('shortenText shortens text with more than 100 chars & add 3 periods', () => {
    const shortened = shortenText(longText)
    expect(shortenText(longText)).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

test('wordCount checks the array and returns correct total word count', () => {
    expect(wordCount(posts)).toBe(233)
})

test('attachUserName returns a property of displayName on the first post returned', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

test('attachUserName removes any post without a matching user', () => {
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
})