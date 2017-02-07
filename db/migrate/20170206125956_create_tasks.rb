class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.string :status
      t.integer :progress
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end
