class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.integer :user_id
      t.integer :project_id
      t.text :title
      t.text :description
      t.string :status
      t.integer :progress
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end
