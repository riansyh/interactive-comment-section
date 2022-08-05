import { Button } from "./components/Button";
import { CommentCard } from "./components/CommentCard";
import { ReplyContainer } from "./components/ReplyContainer";

function App() {
    return (
        <section className="App bg-very-light-gray min-h-screen flex justify-center py-[60px]">
            <section className="max-w-[732px] w-full">
                <CommentCard />
                <ReplyContainer>
                    <CommentCard />
                    <CommentCard />
                </ReplyContainer>

                {/* Comment */}
                <div className="reply-card bg-white rounded-10 flex gap-4 p-6 w-full mt-2 justify-between">
                    <div className="avatar h-10 w-10 rounded-full overflow-hidden bg-light-grayish-blue"></div>
                    <textarea className="input flex-grow" rows="3"></textarea>
                    <Button color="#5259B4">SEND</Button>
                </div>
            </section>
        </section>
    );
}

export default App;
