class CreateBudgets < ActiveRecord::Migration[5.0]
  def change
    create_table :budgets do |t|
      t.integer :task_id
      t.decimal :amount
      t.decimal :extra_cost

      t.timestamps
    end
  end
end
