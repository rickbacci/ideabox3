class Idea < ActiveRecord::Base
  validates :title, presence: true
  validates :body,  presence: true

  enum quality: [ :swill, :plausible, :genius ]


  def get_quality
    require 'pry'; binding.pry
    return 'genius'    if self.quality == '2'
    return 'plausible' if self.quality == '1'
    'swill'
  end
end
