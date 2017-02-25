class CreateWorkmanships < ActiveRecord::Migration[5.0]
  def change
    create_table :workmanships do |t|
      t.integer :user_id
      t.integer :task_id

      t.timestamps
    end
  end
end
