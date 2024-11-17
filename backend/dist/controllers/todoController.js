import { getConnection } from 'typeorm';
import { Todo } from 'entity/Todo';
export class TodoController {
    static async createTodo(req, res) {
        console.log(req.body);
        const { description, userId } = req.body;
        const connection = getConnection();
        try {
            const newTodo = new Todo();
            newTodo.description = description;
            newTodo.userId = userId;
            const savedTodo = await connection.manager.save(newTodo);
            console.log("Todoが正常に作成されました");
            res.status(201).json({ todo: savedTodo });
        }
        catch (error) {
            console.error("Todo作成エラー:", error);
            res.status(400).json({ message: "Todo作成エラー", error });
        }
        finally {
            // レスポンスが送信されたかどうかを確認
            if (!res.headersSent) {
                res.status(500).json({ message: "Internal server error" });
            }
        }
    }
    static async getAllTodos(req, res) {
        const userId = parseInt(req.params.id);
        console.log("userID", userId);
        const connection = getConnection();
        try {
            const todos = await connection.manager.find(Todo, {
                where: { userId: userId },
                select: ["id", "userId", "description"]
            });
            if (todos.length === 0) {
                return res.status(404).json({ message: "Todos not found for this user" });
            }
            res.status(200).json({
                todos: todos
            });
            console.log("Fetched todos:", todos);
        }
        catch (error) {
            console.error("Error fetching todos:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
    static async deleteTodo(req, res) {
        const userId = parseInt(req.params.id);
        console.log("id", userId);
        const connection = getConnection();
        try {
            const todo = await connection.manager.findOne(Todo, {
                where: {
                    userId: userId
                }
            });
            if (todo) {
                await connection.manager.remove(todo);
                res.json({ message: "todoは正常に削除されました" });
            }
            else {
                res.status(404).json({ message: "todoが見つかりません" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "todoの削除中にエラーが発生しました" });
        }
    }
    static async updateTodo(req, res) {
        const userId = parseInt(req.params.id);
        const { text } = req.body;
        const connection = getConnection();
        try {
            const todo = await connection.manager.findOne(Todo, {
                where: {
                    userId: userId
                }
            });
            if (!todo) {
                return res.status(404).json({ message: "Todoが見つかりません" });
            }
            todo.description = text || (todo === null || todo === void 0 ? void 0 : todo.description);
            console.log("todo", todo);
            await connection.manager.save(todo);
            res.json({ message: "Todoが正常に更新されました" });
        }
        catch (error) {
            res.status(404).json({ message: "Todoが見つかりません" });
        }
    }
}
//# sourceMappingURL=todoController.js.map