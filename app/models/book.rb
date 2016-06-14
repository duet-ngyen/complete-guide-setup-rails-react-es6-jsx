class Book < ActiveRecord::Base
  def to_json
    {
      id: self.id,
      title: self.title,
      author: self.author
    }
  end
end
