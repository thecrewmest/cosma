class CreateIssues < ActiveRecord::Migration[5.0]
  def change
    create_table :issues do |t|
      t.integer :task_id
      t.integer :user_id
      t.text :description

      t.timestamps
    end
  end
end
