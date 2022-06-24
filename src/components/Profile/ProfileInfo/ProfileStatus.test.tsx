import TestRenderer from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

const testRenderer = TestRenderer.create(<ProfileStatus status={'dezo103'}/>);
const testInstance = testRenderer.root;

test('span should be on page',  () => {
    expect(testInstance.findByType("span").children[0]).toBeTruthy();
});

test('should be correct text in span status',  () => {
    expect(testInstance.findByType("span").children[0]).toBe('dezo103');
});



