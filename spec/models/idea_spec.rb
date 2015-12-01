require 'rails_helper'

RSpec.describe Idea, type: :model do
  it 'can be created' do
    idea = Idea.new(title: 'idea title', body: 'idea body')

    expect(idea.save).to eql(true)
  end

  it 'must have a title' do
    idea = Idea.new(title: nil, body: 'idea body')

    expect(idea.save).to eql(false)
  end

  it 'must have a body' do
    idea = Idea.new(title: 'idea title', body: nil)

    expect(idea.save).to eql(false)
  end
end
