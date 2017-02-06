class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :phone
      t.string :company
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :profile_image
      t.string :password_digest

      t.timestamps
    end
  end
end
