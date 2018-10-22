class CreateQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :quotes do |t|
      t.text :content, null: false
      t.integer :rating, null: false, default: 0

      t.timestamps
    end
  end
end
