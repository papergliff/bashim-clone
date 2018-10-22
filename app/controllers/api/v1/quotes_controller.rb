class Api::V1::QuotesController < ApplicationController
  before_action :set_quote, only: [:upvote, :downvote]

  def index
    render json: Quote.order(created_at: :desc)
  end

  def create
    quote = Quote.create(quote_params)
    render json: quote
  end

  def upvote
    @quote.update_column(:rating, @quote.rating += 1)
    render status: 200, json: @quote
  end

  def downvote
    @quote.update_column(:rating, @quote.rating -= 1)
    render status: 200, json: @quote
  end

  private

  def set_quote
    @quote = Quote.find(params[:id])
  end

  def quote_params
    params.require(:quote).permit(:id, :content)
  end
end
