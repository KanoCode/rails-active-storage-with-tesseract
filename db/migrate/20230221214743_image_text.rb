class ImageText < ActiveRecord::Migration[7.0]
  def change
      add_column :posts, :img_text, :string
  end
end
